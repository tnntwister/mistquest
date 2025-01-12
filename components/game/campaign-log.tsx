import { useCampaignLog } from '@/contexts/campaign-log-context';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useRef, useEffect } from 'react';
import { XIcon } from 'lucide-react';

export function CampaignLog() {
  const { logs, currentChapter, setCurrentChapter, removeLog } = useCampaignLog();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Scroll to top when logs change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [logs]);

  const CHAPTERS_PER_PAGE = 5;

  // Grouper les logs par chapitre
  const logsByChapter = logs.reduce<Record<number, typeof logs>>((acc, log) => {
    const chapter = log.chapter || 1;
    if (!acc[chapter]) {
      acc[chapter] = [];
    }
    acc[chapter].push(log);
    return acc;
  }, {});

  const chapters = Object.keys(logsByChapter).map(Number).sort((a, b) => a - b);
  const totalChapters = chapters.length;
  const isLastChapter = currentChapter === Math.max(...chapters, currentChapter);

  // Calculer l'index de début pour l'affichage des chapitres
  const startIndex = Math.max(
    0,
    Math.min(
      chapters.indexOf(currentChapter) - Math.floor(CHAPTERS_PER_PAGE / 2),
      totalChapters - CHAPTERS_PER_PAGE
    )
  );

  const visibleChapters = totalChapters <= CHAPTERS_PER_PAGE 
    ? chapters 
    : chapters.slice(startIndex, startIndex + CHAPTERS_PER_PAGE);

  const handleNextChapter = () => {
    setCurrentChapter(prev => prev + 1);
  };

  const currentLogs = logsByChapter[currentChapter] || [];
  const hasLogsInCurrentChapter = currentLogs.length > 0;

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Journal de Campagne</h2>
      <Card>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-lg font-bold">Chapitre {currentChapter}</h3>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {totalChapters > CHAPTERS_PER_PAGE && startIndex > 0 && (
                  <button 
                    onClick={() => setCurrentChapter(chapters[startIndex - 1])}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    ←
                  </button>
                )}

                {visibleChapters.map((chapter) => (
                  <Badge 
                    key={chapter} 
                    variant={chapter === currentChapter ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/80"
                    onClick={() => setCurrentChapter(chapter)}
                  >
                    Chapitre {chapter}
                  </Badge>
                ))}

                {totalChapters > CHAPTERS_PER_PAGE && startIndex + CHAPTERS_PER_PAGE < totalChapters && (
                  <button 
                    onClick={() => setCurrentChapter(chapters[startIndex + CHAPTERS_PER_PAGE])}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    →
                  </button>
                )}
              </div>
              
              {isLastChapter && (
                <button 
                  onClick={handleNextChapter}
                  className="text-sm text-muted-foreground hover:text-primary border-b border-dotted border-muted-foreground hover:border-primary"
                >
                  clore ({currentChapter})
                </button>
              )}
            </div>
          </div>

          <ScrollArea ref={scrollRef} className="h-[400px]">
            {!hasLogsInCurrentChapter ? (
              <div className="text-center text-muted-foreground p-8">
                L'aventure vous attend, faites une action ou une rencontre
              </div>
            ) : (
              <div className="space-y-4">
                {currentLogs
                  .sort((a, b) => b.timestamp - a.timestamp)
                  .map((log, index, array) => (
                    <div key={log.id} className="px-2 pb-4 border-b border-muted-foreground">
                      <div className="flex justify-between items-start">
                        <p className="font-medium">{log.action.label}</p>
                        <p>
                          <span  className="text-xs pr-2">{log.result}</span>
                          <span className="text-xs text-muted-foreground">
                            #{array.length - index}
                          </span>
                          <button
                            onClick={() => removeLog(log.id)}
                            className="text-muted-foreground hover:text-destructive ml-2"
                            title="Supprimer"
                          >
                            <XIcon className="h-3 w-3" />
                          </button>
                        </p>
                      </div>
                      {log.text && (
                        <p className="text-sm mt-1 italic text-muted-foreground">
                          {log.text}
                        </p>
                      )}
                     
                    </div>
                  ))}
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </>
  );
} 
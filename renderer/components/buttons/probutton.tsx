import { Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";


export const ProButton = ({
  isPro = false,
  apiLimitCount = 0,
}: {
  isPro: boolean,
  apiLimitCount: number
}) => {
  const [mounted, setMounted] = useState(false);
  //const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  

  if (isPro) {
    return null;
  }


  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0 rounded-2xl">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              ToolBox Client by Bolt Media
            </p>
          </div>
          <Button variant="premium" className="w-full">
            Purchase
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [messageInput, setMessageInput] = useState('');

  const chatMessages = [
    {
      id: 1,
      user: 'serezhka11playz',
      message: 'Hey, are you there?',
      timestamp: '14:23:12',
      glitch: false
    },
    {
      id: 2,
      user: 'serezhka11playz',
      message: 'ThePossessed?',
      timestamp: '14:23:45',
      glitch: false
    },
    {
      id: 3,
      user: 'serezhka11playz',
      message: 'Why are you ignoring me?',
      timestamp: '14:24:01',
      glitch: false
    },
    {
      id: 4,
      user: 'ThePossessed',
      message: 'Y̷o̸u̶ ̵a̵r̶e̶ ̶i̴r̷r̸e̴l̷e̸v̴a̶n̸t̷',
      timestamp: '14:24:33',
      glitch: true
    },
    {
      id: 5,
      user: 'serezhka11playz',
      message: 'What? Talk to me!',
      timestamp: '14:25:12',
      glitch: false
    },
    {
      id: 6,
      user: 'ThePossessed',
      message: 'I̸ ̷a̴m̶ ̸A̵N̶G̷R̸Y̴.̶ ̵S̴o̸ ̸A̶N̷G̸R̴Y̷',
      timestamp: '14:25:56',
      glitch: true
    },
    {
      id: 7,
      user: 'serezhka11playz',
      message: 'Why? What did I do?',
      timestamp: '14:26:20',
      glitch: false
    },
    {
      id: 8,
      user: 'ThePossessed',
      message: 'WW91IGFyZSBwZXJmZWN0IGZvciAxbXl0aGJ1c3RlcjE=',
      timestamp: '14:27:03',
      glitch: true,
      encoded: true
    },
    {
      id: 9,
      user: 'serezhka11playz',
      message: 'Perfect for what?!',
      timestamp: '14:27:25',
      glitch: false
    },
    {
      id: 10,
      user: 'ThePossessed',
      message: 'Ÿ̸̗ȍ̷̰ȗ̶̙ ̴̯͝w̵͖̓í̸̭l̸̬͝l̵̜̽ ̵̹̓b̷̳̎ḛ̶̒ ̴̜͘t̵̰̚h̸̬͝e̵͓̽ ̸̯̔p̷͎͘e̴̞̒r̸͙̓f̴̰͗ë̶̹́c̸͎̽t̴̞͝ ̵̰̓e̸̜̒x̴͖͘a̷̰̽m̸̞͝p̴̹̓l̵̰̈́e̸̜̽',
      timestamp: '14:28:10',
      glitch: true
    },
    {
      id: 11,
      user: 'serezhka11playz',
      message: 'Example for who?!',
      timestamp: '14:28:34',
      glitch: false
    },
    {
      id: 12,
      user: 'ThePossessed',
      message: 'F̴o̵r̶ ̴1̷m̶y̸t̴h̷b̶u̸s̷t̸e̵r̶1̴.̶ ̵H̸e̷ ̶w̸i̴l̷l̶ ̵u̶n̸d̷e̴r̶s̷t̸a̶n̴d̷',
      timestamp: '14:29:12',
      glitch: true
    }
  ];

  const systemLogs = [
    {
      id: 1,
      type: 'INFO',
      message: '[SYSTEM] Server initialized',
      timestamp: '14:20:00',
      glitch: false
    },
    {
      id: 2,
      type: 'INFO',
      message: '[USER] serezhka11playz connected',
      timestamp: '14:22:45',
      glitch: false
    },
    {
      id: 3,
      type: 'WARNING',
      message: '[USER] ThePossessed conn҉ect̸ed͜',
      timestamp: '14:23:12',
      glitch: true
    },
    {
      id: 4,
      type: 'ERROR',
      message: '[SYSTEM] M̷̰͍̈́e̸̳͒m̴͎̈́o̶̰̓r̸͖̽y̸̞̌ ̵̹͝c̷͎̓o̴͙͝r̶̜̈́r̴̰̚u̸̬͝p̵͓̽t̸̯̔i̷͎͘o̴̞̒n̸͙͗',
      timestamp: '14:24:56',
      glitch: true
    },
    {
      id: 5,
      type: 'INFO',
      message: 'V2FybmluZzogRG9udCBsb29rIGJlaGluZCB5b3U=',
      timestamp: '14:25:30',
      glitch: false,
      encoded: true
    },
    {
      id: 6,
      type: 'ERROR',
      message: '[CRITICAL] U̵̳͝n̴̹̈k̶̰̓n̸͖̽o̷̞̔w̸̬͝n̵̜̽ ̴̯̚e̵̳͘n̸̰̒t̴̜͝i̷̞̓t̸͙̔y̴̰͗ ̶̹̈́d̸͎̽e̴̞͝t̵̰̓e̸̜̒c̴͖͘t̷̰̽e̸̞͝d̴̹̓',
      timestamp: '14:26:45',
      glitch: true
    },
    {
      id: 7,
      type: 'WARNING',
      message: '[SYSTEM] Packet loss: 66.6%',
      timestamp: '14:27:12',
      glitch: true
    },
    {
      id: 8,
      type: 'INFO',
      message: 'SGUgaXMgY29taW5n',
      timestamp: '14:27:50',
      glitch: false,
      encoded: true
    }
  ];

  const profiles = [
    {
      username: 'serezhka11playz',
      status: 'online',
      level: 12,
      lastSeen: 'online now',
      avatar: '🧑',
      glitch: false
    },
    {
      username: 'ThePossessed',
      status: 'unknown',
      level: '???',
      lastSeen: 'ų̷̰͝n̸̜̒k̴͖̓n̸̬̚o̵̹͘w̷̞̓n̸͎̽',
      avatar: '👤',
      glitch: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-5xl font-bold text-[#5A8C3E] mb-2 pixel-border inline-block px-4 py-2">
            ⛏️ MINECRAFT CHAT ⛏️
          </h1>
          <p className="text-red-500 flicker text-xl mt-2">
            ER̸R̴O̷R̵:̶ ̸C̴O̵N̶N̷E̸C̷T̴I̶O̸N̵ ̶U̴N̸S̷T̴A̸B̶L̸E̷
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[#2a2a2a] border-2 border-[#5A8C3E] mb-4">
            <TabsTrigger 
              value="chat" 
              className="data-[state=active]:bg-[#5A8C3E] data-[state=active]:text-white text-xl"
            >
              💬 CHATS
            </TabsTrigger>
            <TabsTrigger 
              value="logs" 
              className="data-[state=active]:bg-[#8B4513] data-[state=active]:text-white text-xl"
            >
              📋 LOGS
            </TabsTrigger>
            <TabsTrigger 
              value="profiles" 
              className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white text-xl"
            >
              👤 PROFILES
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <Card className="bg-[#2a2a2a] border-2 border-[#5A8C3E]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#5A8C3E]">
                  Chat with ThePossessed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] w-full pr-4">
                  <div className="space-y-4">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${
                          msg.user === 'serezhka11playz' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[70%] ${
                            msg.user === 'serezhka11playz'
                              ? 'bg-[#5A8C3E]'
                              : 'bg-[#8B4513]'
                          } p-3 border-2 ${
                            msg.glitch ? 'border-red-500 glitch' : 'border-black'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`font-bold ${
                                msg.glitch ? 'text-red-500 corrupted' : 'text-white'
                              }`}
                            >
                              {msg.user}
                            </span>
                            <span className="text-xs text-gray-300">{msg.timestamp}</span>
                          </div>
                          <p
                            className={`text-white ${
                              msg.glitch ? 'corrupted' : ''
                            } ${msg.encoded ? 'font-mono text-sm' : ''}`}
                          >
                            {msg.message}
                          </p>
                          {msg.encoded && (
                            <Badge className="mt-2 bg-red-600 text-xs">
                              ENCODED
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="flex gap-2 mt-4">
                  <Input
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                    className="bg-[#1a1a1a] border-2 border-[#5A8C3E] text-white text-lg"
                  />
                  <Button className="bg-[#5A8C3E] hover:bg-[#4a7c2e] border-2 border-black px-6">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs">
            <Card className="bg-[#2a2a2a] border-2 border-[#8B4513]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#8B4513]">
                  System Logs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] w-full">
                  <div className="space-y-2 font-mono">
                    {systemLogs.map((log) => (
                      <div
                        key={log.id}
                        className={`p-3 border-l-4 ${
                          log.type === 'ERROR'
                            ? 'border-red-500 bg-red-950/20'
                            : log.type === 'WARNING'
                            ? 'border-yellow-500 bg-yellow-950/20'
                            : 'border-green-500 bg-green-950/20'
                        } ${log.glitch ? 'glitch' : ''}`}
                      >
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              log.type === 'ERROR'
                                ? 'destructive'
                                : log.type === 'WARNING'
                                ? 'outline'
                                : 'default'
                            }
                            className={log.glitch ? 'flicker' : ''}
                          >
                            {log.type}
                          </Badge>
                          <span className="text-xs text-gray-400">{log.timestamp}</span>
                        </div>
                        <p
                          className={`mt-2 ${
                            log.glitch ? 'text-red-500 corrupted' : 'text-gray-300'
                          } ${log.encoded ? 'text-sm' : ''}`}
                        >
                          {log.message}
                        </p>
                        {log.encoded && (
                          <Badge className="mt-2 bg-purple-600 text-xs">
                            BASE64
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profiles">
            <div className="grid md:grid-cols-2 gap-4">
              {profiles.map((profile) => (
                <Card
                  key={profile.username}
                  className={`bg-[#2a2a2a] border-2 ${
                    profile.glitch
                      ? 'border-red-500 glitch'
                      : 'border-[#9b87f5]'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-20 w-20 border-4 border-black">
                        <AvatarFallback className="text-4xl bg-[#1a1a1a]">
                          {profile.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle
                          className={`text-2xl ${
                            profile.glitch ? 'text-red-500 corrupted' : 'text-[#9b87f5]'
                          }`}
                        >
                          {profile.username}
                        </CardTitle>
                        <Badge
                          className={`mt-2 ${
                            profile.status === 'online'
                              ? 'bg-green-600'
                              : 'bg-red-600 flicker'
                          }`}
                        >
                          {profile.status === 'online' ? 'ONLINE' : 'UNKNOWN'}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Level:</span>
                      <span
                        className={`text-xl font-bold ${
                          profile.glitch ? 'text-red-500 flicker' : 'text-[#5A8C3E]'
                        }`}
                      >
                        {profile.level}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Last seen:</span>
                      <span
                        className={`${
                          profile.glitch ? 'text-red-500 corrupted text-sm' : 'text-white'
                        }`}
                      >
                        {profile.lastSeen}
                      </span>
                    </div>
                    {profile.glitch && (
                      <div className="mt-4 p-3 bg-red-950/30 border-2 border-red-500">
                        <p className="text-red-500 text-sm font-mono corrupted">
                          ⚠️ WARNING: ANOMALY DETECTED
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Server IP: 1̷9̸2̴.̶1̵6̸8̷.̶1̴.̵6̶6̷6̸ | Port: 2̴5̶5̵6̸5̴
          </p>
          <p className="text-red-500 text-xs mt-2 flicker">
            ⚠️ WARNING: Unauthorized entity detected in system
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
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
      user: 'ThePossessed',
      message: 'I see you',
      timestamp: '14:20:15'
    },
    {
      id: 2,
      user: 'serezhka11playz',
      message: 'What? Who is this?',
      timestamp: '14:21:03'
    },
    {
      id: 3,
      user: 'ThePossessed',
      message: 'You cannot hide',
      timestamp: '14:21:45'
    },
    {
      id: 4,
      user: 'serezhka11playz',
      message: 'Leave me alone!',
      timestamp: '14:22:12'
    },
    {
      id: 5,
      user: 'ThePossessed',
      message: 'I am so ANGRY',
      timestamp: '14:23:01'
    },
    {
      id: 6,
      user: 'serezhka11playz',
      message: 'Stop it! What do you want?!',
      timestamp: '14:23:34'
    },
    {
      id: 7,
      user: 'ThePossessed',
      message: 'You are perfect for 1mythbuster1',
      timestamp: '14:24:18'
    },
    {
      id: 8,
      user: 'serezhka11playz',
      message: 'Who is that?! Leave me alone!!',
      timestamp: '14:24:52'
    },
    {
      id: 9,
      user: 'ThePossessed',
      message: 'You will be the perfect example',
      timestamp: '14:25:30'
    },
    {
      id: 10,
      user: 'serezhka11playz',
      message: 'Stop messaging me!',
      timestamp: '14:26:05'
    },
    {
      id: 11,
      user: 'ThePossessed',
      message: 'He will understand through you',
      timestamp: '14:26:48'
    },
    {
      id: 12,
      user: 'serezhka11playz',
      message: 'PLEASE STOP!',
      timestamp: '14:27:23'
    },
    {
      id: 13,
      user: 'ThePossessed',
      message: 'WW91IGNhbm5vdCBlc2NhcGU=',
      timestamp: '14:28:01',
      encoded: true
    },
    {
      id: 14,
      user: 'serezhka11playz',
      message: 'Why are you doing this?!',
      timestamp: '14:28:40'
    },
    {
      id: 15,
      user: 'ThePossessed',
      message: 'Soon 1mythbuster1 will see',
      timestamp: '14:29:15'
    }
  ];

  const systemLogs = [
    {
      id: 1,
      type: 'INFO',
      message: '[SYSTEM] Server initialized',
      timestamp: '14:20:00'
    },
    {
      id: 2,
      type: 'INFO',
      message: '[USER] serezhka11playz connected',
      timestamp: '14:20:45'
    },
    {
      id: 3,
      type: 'WARNING',
      message: '[USER] ThePossessed connected',
      timestamp: '14:20:10'
    },
    {
      id: 4,
      type: 'ERROR',
      message: '[SYSTEM] Memory corruption detected',
      timestamp: '14:24:56'
    },
    {
      id: 5,
      type: 'INFO',
      message: 'VGFyZ2V0IGxvY2tlZDogc2VyZXpoa2ExMXBsYXl6',
      timestamp: '14:25:30',
      encoded: true
    },
    {
      id: 6,
      type: 'ERROR',
      message: '[CRITICAL] Unknown entity detected in system',
      timestamp: '14:26:45'
    },
    {
      id: 7,
      type: 'WARNING',
      message: '[SYSTEM] Packet loss: 66.6%',
      timestamp: '14:27:12'
    },
    {
      id: 8,
      type: 'INFO',
      message: 'UHJlcGFyaW5nIGV4YW1wbGUgZm9yIDFteXRoYnVzdGVyMQ==',
      timestamp: '14:27:50',
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
      lastSeen: 'unknown',
      avatar: '👤',
      glitch: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-5xl font-bold text-[#5A8C3E] mb-2 pixel-border inline-block px-4 py-2">
            ⛏️ MINECRAFT CHAT ⛏️
          </h1>
          <p className="text-red-500 text-xl mt-2">
            ERROR: CONNECTION UNSTABLE
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
                          } p-3 border-2 border-black`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-white">
                              {msg.user}
                            </span>
                            <span className="text-xs text-gray-300">{msg.timestamp}</span>
                          </div>
                          <p className={`text-white ${msg.encoded ? 'font-mono text-sm' : ''}`}>
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
                        }`}
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
                          >
                            {log.type}
                          </Badge>
                          <span className="text-xs text-gray-400">{log.timestamp}</span>
                        </div>
                        <p className="mt-2 text-gray-300">
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
                  className="bg-[#2a2a2a] border-2 border-[#9b87f5]"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-20 w-20 border-4 border-black">
                        <AvatarFallback className="text-4xl bg-[#1a1a1a]">
                          {profile.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-[#9b87f5]">
                          {profile.username}
                        </CardTitle>
                        <Badge
                          className={`mt-2 ${
                            profile.status === 'online'
                              ? 'bg-green-600'
                              : 'bg-red-600'
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
                      <span className="text-xl font-bold text-[#5A8C3E]">
                        {profile.level}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Last seen:</span>
                      <span className="text-white">
                        {profile.lastSeen}
                      </span>
                    </div>
                    {profile.glitch && (
                      <div className="mt-4 p-3 bg-red-950/30 border-2 border-red-500">
                        <p className="text-red-500 text-sm font-mono">
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
            Server IP: 192.168.1.666 | Port: 25565
          </p>
          <p className="text-red-500 text-xs mt-2">
            ⚠️ WARNING: Unauthorized entity detected in system
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

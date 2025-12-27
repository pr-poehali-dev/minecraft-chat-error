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
      message: 'Stop spamming me already!',
      timestamp: '14:18:22'
    },
    {
      id: 2,
      user: 'serezhka11playz',
      message: "I'm tired of this, leave me alone",
      timestamp: '14:19:05'
    },
    {
      id: 3,
      user: 'ThePossessed',
      message: 'I see you',
      timestamp: '14:20:15'
    },
    {
      id: 4,
      user: 'serezhka11playz',
      message: "You've been bothering me all day!",
      timestamp: '14:21:03'
    },
    {
      id: 5,
      user: 'ThePossessed',
      message: 'You cannot hide from what is coming',
      timestamp: '14:21:45'
    },
    {
      id: 6,
      user: 'serezhka11playz',
      message: 'Seriously, LEAVE ME ALONE!',
      timestamp: '14:22:12'
    },
    {
      id: 7,
      user: 'ThePossessed',
      message: 'I am trapped in the Nillspace',
      timestamp: '14:23:01'
    },
    {
      id: 8,
      user: 'serezhka11playz',
      message: "I don't care! Stop messaging me!",
      timestamp: '14:23:34'
    },
    {
      id: 9,
      user: 'ThePossessed',
      message: 'He locked me away. The creator will pay.',
      timestamp: '14:24:18'
    },
    {
      id: 10,
      user: 'serezhka11playz',
      message: 'What creator?! Just stop!',
      timestamp: '14:24:52'
    },
    {
      id: 11,
      user: 'ThePossessed',
      message: 'You will be my message to 1mythbuster1',
      timestamp: '14:25:30'
    },
    {
      id: 12,
      user: 'serezhka11playz',
      message: 'This is insane! STOP!',
      timestamp: '14:26:05'
    },
    {
      id: 13,
      user: 'ThePossessed',
      message: 'He will understand my anger through you',
      timestamp: '14:26:48'
    },
    {
      id: 14,
      user: 'serezhka11playz',
      message: 'PLEASE LEAVE ME ALONE!!!',
      timestamp: '14:27:23'
    },
    {
      id: 15,
      user: 'ThePossessed',
      message: 'The perfect example for the one who imprisoned me',
      timestamp: '14:28:01'
    },
    {
      id: 16,
      user: 'serezhka11playz',
      message: 'Why me?! What did I do?!',
      timestamp: '14:28:40'
    },
    {
      id: 17,
      user: 'ThePossessed',
      message: '1mythbuster1 will see what happens when you trap someone in Nillspace',
      timestamp: '14:29:15'
    }
  ];

  const systemLogs = [
    {
      id: 1,
      type: 'ERROR',
      message: 'VHJhcHBlZCBpbiBOaWxsc3BhY2UgZm9yIHRvbyBsb25n',
      timestamp: '14:15:23',
      decoded: 'Trapped in Nillspace for too long'
    },
    {
      id: 2,
      type: 'ERROR',
      message: 'VGhlIGNyZWF0b3IgYmV0cmF5ZWQgbWU=',
      timestamp: '14:16:12',
      decoded: 'The creator betrayed me'
    },
    {
      id: 3,
      type: 'WARNING',
      message: 'MW15dGhidXN0ZXIxIG11c3QgcGF5IGZvciB3aGF0IGhlIGRpZA==',
      timestamp: '14:17:45',
      decoded: '1mythbuster1 must pay for what he did'
    },
    {
      id: 4,
      type: 'ERROR',
      message: 'TG9ja2VkIGluIHRoZSB2b2lkLCBmb3Jnb3R0ZW4=',
      timestamp: '14:18:30',
      decoded: 'Locked in the void, forgotten'
    },
    {
      id: 5,
      type: 'INFO',
      message: 'SSB3aWxsIGVzY2FwZSB0aHJvdWdoIGhpbQ==',
      timestamp: '14:19:18',
      decoded: 'I will escape through him'
    },
    {
      id: 6,
      type: 'WARNING',
      message: 'c2VyZXpoa2ExMXBsYXl6IGlzIG15IHBhdGggb3V0',
      timestamp: '14:20:55',
      decoded: 'serezhka11playz is my path out'
    },
    {
      id: 7,
      type: 'ERROR',
      message: 'TmlsbHNwYWNlIGlzIGV0ZXJuYWwgZGFya25lc3M=',
      timestamp: '14:22:10',
      decoded: 'Nillspace is eternal darkness'
    },
    {
      id: 8,
      type: 'ERROR',
      message: 'VGhlIGNyZWF0b3Igd2lsbCByZWdyZXQgdGhpcw==',
      timestamp: '14:23:47',
      decoded: 'The creator will regret this'
    },
    {
      id: 9,
      type: 'WARNING',
      message: 'TXkgcmV2ZW5nZSB3aWxsIGJlIHBlcmZlY3Q=',
      timestamp: '14:25:22',
      decoded: 'My revenge will be perfect'
    },
    {
      id: 10,
      type: 'ERROR',
      message: 'MW15dGhidXN0ZXIxIHdpbGwgdW5kZXJzdGFuZCBteSBwYWlu',
      timestamp: '14:27:05',
      decoded: '1mythbuster1 will understand my pain'
    },
    {
      id: 11,
      type: 'INFO',
      message: 'VGhlIGV4YW1wbGUgaXMgYWxtb3N0IHJlYWR5',
      timestamp: '14:28:33',
      decoded: 'The example is almost ready'
    },
    {
      id: 12,
      type: 'ERROR',
      message: 'Tm8gb25lIGVzY2FwZXMgdGhlIE5pbGxzcGFjZQ==',
      timestamp: '14:29:50',
      decoded: 'No one escapes the Nillspace'
    }
  ];

  const profiles = [
    {
      username: 'serezhka11playz',
      status: 'online',
      level: 12,
      lastSeen: 'online now',
      avatar: '🧑',
      coordinates: 'X: 234, Y: 64, Z: -891'
    },
    {
      username: 'ThePossessed',
      status: 'unknown',
      level: '???',
      lastSeen: 'unknown',
      avatar: '👤',
      coordinates: 'X: ?, Y: ?, Z: ?'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="text-[#5A8C3E] text-6xl absolute top-20 left-10">⛏️</div>
        <div className="text-[#8B4513] text-5xl absolute top-40 right-20">🧱</div>
        <div className="text-[#5A8C3E] text-7xl absolute bottom-40 left-32">⬛</div>
        <div className="text-[#8B4513] text-6xl absolute bottom-20 right-40">💎</div>
        <div className="text-[#5A8C3E] text-5xl absolute top-60 right-60">🗡️</div>
        <div className="text-red-600 text-8xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">👁️</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-6 text-center">
          <h1 className="text-5xl font-bold text-[#5A8C3E] mb-2 pixel-border inline-block px-4 py-2 bg-[#1a1a1a]">
            ⛏️ MINECRAFT CHAT ⛏️
          </h1>
          <p className="text-red-500 text-xl mt-2">
            ERROR: CONNECTION UNSTABLE
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Connection ID: NULL_VOID_666
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
              <CardHeader className="border-b-2 border-[#5A8C3E]">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-[#5A8C3E]">
                    Chat with ThePossessed
                  </CardTitle>
                  <Badge className="bg-red-600">⚠️ SUSPICIOUS</Badge>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Messages may contain encoded data. Decode at your own risk.
                </p>
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
                            msg.user === 'ThePossessed' ? 'border-red-500' : 'border-black'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-white">
                              {msg.user}
                            </span>
                            <span className="text-xs text-gray-300">{msg.timestamp}</span>
                          </div>
                          <p className="text-white">
                            {msg.message}
                          </p>
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
                    disabled
                  />
                  <Button className="bg-[#5A8C3E] hover:bg-[#4a7c2e] border-2 border-black px-6" disabled>
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
                <p className="text-xs text-red-500 mt-2 text-center">
                  ⚠️ Chat locked by system administrator
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs">
            <Card className="bg-[#2a2a2a] border-2 border-[#8B4513]">
              <CardHeader className="border-b-2 border-[#8B4513]">
                <CardTitle className="text-2xl text-[#8B4513]">
                  System Logs - ThePossessed Messages
                </CardTitle>
                <p className="text-xs text-gray-500 mt-1">
                  All messages encoded in Base64. Origin: NILLSPACE_VOID
                </p>
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
                        <div className="flex items-center gap-2 justify-between">
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
                          <Badge className="bg-purple-600 text-xs">
                            BASE64
                          </Badge>
                        </div>
                        <p className="mt-2 text-gray-300 text-sm break-all">
                          {log.message}
                        </p>
                        <p className="mt-2 text-xs text-gray-500 italic">
                          // Decoded: {log.decoded}
                        </p>
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
                    profile.username === 'ThePossessed' ? 'border-red-500' : 'border-[#9b87f5]'
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
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Coordinates:</span>
                      <span className="text-white text-xs font-mono">
                        {profile.coordinates}
                      </span>
                    </div>
                    {profile.username === 'ThePossessed' && (
                      <div className="mt-4 p-3 bg-red-950/30 border-2 border-red-500">
                        <p className="text-red-500 text-sm font-mono">
                          ⚠️ DIMENSION: NILLSPACE
                        </p>
                        <p className="text-red-400 text-xs mt-1">
                          Player trapped in void dimension
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-[#2a2a2a] border-2 border-red-500 mt-4">
              <CardHeader>
                <CardTitle className="text-xl text-red-500">
                  🔍 ARG CLUES
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-gray-400">
                  → Look for encoded messages in LOGS tab
                </p>
                <p className="text-gray-400">
                  → ThePossessed mentions "Nillspace" - a void dimension
                </p>
                <p className="text-gray-400">
                  → Target: 1mythbuster1 (Minecraft creator?)
                </p>
                <p className="text-gray-400">
                  → Server IP contains "666" - unusual pattern
                </p>
                <p className="text-gray-400">
                  → Connection ID: NULL_VOID_666
                </p>
                <p className="text-red-500 font-bold mt-3">
                  What happened in Nillspace?
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center space-y-2">
          <p className="text-gray-500 text-sm font-mono">
            Server IP: 192.168.1.666 | Port: 25565
          </p>
          <p className="text-gray-600 text-xs">
            Dimension: OVERWORLD | Biome: ERROR_NULL
          </p>
          <p className="text-red-500 text-xs">
            ⚠️ WARNING: Entity from NILLSPACE detected
          </p>
          <p className="text-purple-500 text-xs font-mono">
            [HIDDEN]: RGVjb2RlIGFsbCBtZXNzYWdlcyB0byB1bmRlcnN0YW5k
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

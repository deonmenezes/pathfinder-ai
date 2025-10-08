import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Twitter, Instagram } from 'lucide-react';

const Updates = () => {
  // This hook dynamically loads the scripts needed for Twitter and Instagram embeds
  useEffect(() => {
    // Twitter widget script
    const twitterScript = document.createElement('script');
    twitterScript.src = "https://platform.twitter.com/widgets.js";
    twitterScript.async = true;
    twitterScript.charset = "utf-8";
    document.body.appendChild(twitterScript);

    // Instagram embed script
    const instagramScript = document.createElement('script');
    instagramScript.src = "//www.instagram.com/embed.js";
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

    // Cleanup function to remove scripts when the component is unmounted
    return () => {
      document.body.removeChild(twitterScript);
      document.body.removeChild(instagramScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Latest Updates</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
            Follow us on social media for the latest news, events, and career insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Twitter Feed Section */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-2">
              <Twitter className="h-6 w-6 text-blue-500" />
              <CardTitle className="text-2xl">Updates from Twitter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Replace the content below with your Twitter embed code.
              </p>
              {/* 👇 PASTE YOUR TWITTER EMBED CODE HERE 👇
                Go to https://publish.twitter.com/ to generate your timeline widget.
              */}
              <a 
                className="twitter-timeline" 
                data-height="600" 
                href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">
                  Tweets by TwitterDev
              </a>
            </CardContent>
          </Card>

          {/* Instagram Feed Section */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-2">
              <Instagram className="h-6 w-6 text-pink-600" />
              <CardTitle className="text-2xl">Highlights from Instagram</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                You can embed a specific Instagram post here.
              </p>
              {/* 👇 PASTE YOUR INSTAGRAM EMBED CODE HERE 👇
                1. Go to the Instagram post on your desktop browser.
                2. Click the three dots (...) and select "Embed".
                3. Copy the code and paste it here.
              */}
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/C2_p4J4go4g/?utm_source=ig_embed&amp;utm_campaign=loading" 
                data-instgrm-version="14" 
                style={{ background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'calc(100% - 2px)' }}>
                {/* This is a placeholder embed from Instagram's account */}
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Updates;


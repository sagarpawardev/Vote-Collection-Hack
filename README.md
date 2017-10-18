# Vote-Collection-Hack Experience Story
This is documentation of Hacking steps I used to collect vote in a competition

The website where I was is not using login for vote but every IP can vote just once.

## Using Postman
- First thing I need to find the API which is getting called on button click. So I found out using chrome Inspect Elements
- I tried hiting API using postman but it returned me ERROR-CODE: 403
- So Postman Failed

## Using Python
- Now I had API request which I need to call
- I tried hiting API directly using "requests" package (but returned me ERROR_CODE: 403)
- I thought may be I need to maintain session. So I tried initiating session. So, It was success because error changed. Now API is returning me content with content "Failed"
- I thought to be more concrete I need to look like browser now. So I added http headers field and made it firefox using MAC and header was 
```

 headers = {
 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
}
```
- I was successfull and now, on first time API hit it returned me "Voted Successfull!!"
- but at second try it returned me "Already Voted!!"
- For Increasing votes I need to make my unique everytime I need a vote. So I had following ways:
1. Using VPN
2. Using Proxy Servers
3. Using TOR


## Using VPN
- I was using TunnelBear at that time. It is quite good VPN but I need to do everyting manually using GUI in TunnelBear.
- I tried using Germany, Russia, etc after some 15 switches I stopped now I need to find a better way


## Using Proxy Servers
- Main challenge in using proxy servers was I need to find proxy those many unique proxy server
- I tried googling and found one package "FastVisits TBN + proxies". It had a txt file containing 7652 Proxyserver list. But they were two old only 6-10 Proxy Servers worked. So it failed.
- I started googling again and found a magical website [Free Proxy List](free-proxy-list.net/anonymous-proxy.html). This is the website where around 100 proxy servers were listed and 40-70% of them were working. So quite nice. and most important is they were getting updated every 10 minutes.


## Python Coding Starts
- No I need to write a code which will parse html in every 10 min and will give me proxy-server list.
- I used python's "requests" again to read URL content and BeautifulSoup4 package to parse.
- Now everyting was working fine, but now a new Monster. I wrote Hitting-API code in thread it was taking more than 10 min to hit API using proxy servers. As a result lot of threads were getting accumulated.


## Saving on file
- I was now saving all the IPs which were success in a file. So that I will save that much hitting time.
- I also collected those IPs to which I am not able to connect. So that I will save my time whom I am not even able to ping. 
- This technique improved time alot but still not that muchh satifactory.
- whole night program was running and I am able to collect only 490 votes. Shame!!!


## Need much better Technique than Multi-Threading
- I tried Multi-Threading using multiple websites but none of them were much effective only 5-10% of IPs were valid.

## Problem Becoming Much Harder
- I tried using some TOR libraries of python but none of them working for me.
- Now one more problem is arrinsing free-proxy-lists IPs are getting repeated alot and only getting 4-5 new IPs, out of which 1-2 were only working
- Now, I was getting under much pressure

## Frustration Continues
- No TOR libraries
- No new proxy servers
- No Google translate proxy (as JS was disabled o Google Translate)
- No VPN (as I need to do lot of GUI manual work)

## Taking a U turn
- Now I found one of the amazing Firefox plugin "GreaseMonkey"
- This allows user to write own JS script and run when specified URL is loaded.
- And TOR Browser is also Firefox only. So I can use combination of TOR, JS and GreaseMonkey
- Now I completedly left Python aside and now holded JS hand.

## Long live king JS
- Now everthing was working find. But due to slow network it was working very slow
- Initialy I was firing script on same page where I need to vote but that page was loading an image which was wasting my BandWidth.
- So, again using JS only I deleted that image node :D. and also some other nodes.


## Improving TOR
- TOR was not changing its circuit and not providing me new IP.
- So again some googling and found a tutorial in which I found **cd ~/Library/Application\ Support/TorBrowser-Data/Tor/torrc** and added following lines at end to change IP address every 10 millissecond
```

GeoIPv6File /Applications/TorBrowser.app/Contents/Resources/TorBrowser/Tor/geoi$
CircuitBuildTimeout 10
LearnCircuitBuildTimeout 0
MaxCircuitDirtiness 10
```
- Also I changed my Script firing URL to there FAQ page
- Instead of reloading page now I was using calling function on Loop whenever I get reply from API
- So now everthing is working better than before now but still not satisfactory. I am getting 1 vote in every 2 minutes now

## Future Work
- I am still in progress to this challenge (as on 18-Oct-2017).
- Now I am thinking to use bots to spread this JS on a network. So that some other computer will also able to help me with this task.
- But challenge is I don't know how to make bots :p

### And Story Continues...

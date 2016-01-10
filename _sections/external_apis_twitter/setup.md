---
title: Twitter
---

## APIs

APIs (*application programming interfaces*) are of vital importance to developers - they enable you to programmatically access data from various different services such as Twitter, Facebook and Spotify to name a few. APIs enable you to create applications powered by data from any service of your liking.

## Twitter

Twitter provides a set of [REST APIs](https://dev.twitter.com/rest/public) in order to programmatically access, read & write Twitter data. You can access Twitter's REST APIs in many different ways - there are [a whole bunch of libraries](https://dev.twitter.com/overview/api/twitter-libraries) for any programming language you can imagine. In the context of this course, we will be using the appropriately-named **[twitter](https://github.com/sferik/twitter)** gem, which enables programmatic access to Twitter's REST APIs.

As we all know by now, installing a Ruby gem such as twitter is as simple as doing:

{% highlight bash %}
gem install twitter
{% endhighlight %}

As always, you might need to add a `sudo` at the start of that command.

As per last session's homework, you should all have a Twitter account, so go ahead and head over to [apps.twitter.com](https://apps.twitter.com) (log in with your Twitter account if you are not already logged in).

Once logged in, you should see the following:

![Twitter apps page](/images/twitter_apps_page.png)

We will create a new application, so click on the **Create New App** button.

You will now be presented with a form that you need to fill in with all your application details - fill in the name, description and website fields (leave the callback URL field blank). Before pressing the **Create your Twitter application** button, ensure you select that you agree to the Developer Agreement.

Once you do that, if everything works out fine you will be taken to your application page where you can see some basic information. Click on the **Keys and Access Tokens** tab, where you should see a consumer key and secret under the **Application Settings** heading. We'll also need an access token, so go ahead and generate one by clicking the **Create my access token** near the bottom of the page. We will use these keys and secrets in our Ruby code to authenticate ourselves with Twitter so that it knows we have a genuine application to access data.

Let's try get some Twitter data using the twitter gem - for example, let's get tweets that mention CodeFirstGirls:

{% highlight ruby %}
twitter_api = Twitter::REST::Client.new do |config|
  config.consumer_key        = "YOUR_CONSUMER_KEY"
  config.consumer_secret     = "YOUR_CONSUMER_SECRET"
  config.access_token        = "YOUR_ACCESS_TOKEN"
  config.access_token_secret = "YOUR_ACCESS_SECRET"
end

cfg_tweets = twitter_api.search("CodeFirstGirls")

cfg_tweets.each do |tweet|
  puts "#{tweet.user.screen_name}: #{tweet.text}"
end
{% endhighlight %}

That's cool, right? That's just a small glimpse of what you can actually do using Twitter's API! You can look at the [twitter gem's documentation](https://github.com/sferik/twitter#readme) and [examples](https://github.com/sferik/twitter/tree/master/examples) to discover some more things that you can do with it.

<div class="task" markdown="1">
## Task
- Get information related to the CodeFirstGirls Twitter user
- Get a list of all followers for the CodeFirstGirls Twitter user
- Figure out how to post a tweet using the twitter gem
</div>

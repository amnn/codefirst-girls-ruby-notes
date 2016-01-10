---
title: Using Mailgun
---

## Using Mailgun

Once you log into your Mailgun account, click on the **Domains** link at the top of the page:

![Mailgun website header](/images/mailgun_header.png)

You should then see a page that looks like this:

![Mailgun domains page](/images/mailgun_domains_page.png)

By default, Mailgun gives us a sandbox domain, which can be used without a custom verified domain. This domain can send up to 300 emails/day, which should be more than enough!

Make sure that you have a green **Active** tag on your page - contact your instructor if you don't.

In order to programmatically send emails, we need to get our SMTP credentials, so go ahead and click on the link under the **Domain name** header that looks like **sandboxa4dc3ae3c022459a921a53...** (your domain name will be different). You should now see a page that looks like this:

![Mailgun domain settings page](/images/mailgun_domain_settings.png)

We will need the **Default SMTP Login** and **Default Password** in a bit - these are our credentials that we will use to access Mailgun's SMTP service - so make a note of them.

## Pony

Firstly, we need to install the **Pony** gem - enter the following in your terminal:

{% highlight bash %}
gem install pony
{% endhighlight %}

(as with Sinatra, you may need to add a `sudo` to the front of that command).

We now need to tell Pony about the SMTP server we want to use, and enter our SMTP credentials. Create a file called **email.rb** and enter the following code:

{% highlight ruby %}
require 'pony'

Pony.options = {
  :via => 'smtp',
  :via_options => {
    :address => 'smtp.mailgun.org',
    :port => '587',
    :enable_starttls_auto => true,
    :authentication => :plain,
    # This is the Default SMTP Login from earlier:
    :user_name => 'postmaster@your-sandbox-domain.mailgun.org',
    # This is your Default Password:
    :password => 'your password'
  }
}
{% endhighlight %}

Next up, we want to actually send an email, so we need to add the following to our `email.rb` file:

{% highlight ruby %}
message = {
  :from => 'hello@example.com',
  :to => 'Recipient Name Goes Here <some.email@example.com>',
  :subject => 'Welcome!',
  :body => 'Thanks for signing up to our awesome newsletter!'
}

Pony.mail(message)
{% endhighlight %}

We can now send an email from our terminal by running the file with Ruby:

{% highlight bash %}
ruby email.rb
{% endhighlight %}

This example is completely independent from a Sinatra app, so what you should do now is figure out how to apply the above code in the context of your Sinatra app that we created over the past few sessions.

Ensure that you are sending an email to a valid email address, set your own email address as the `from` and use the email and name submitted via the form that we were previously printing.

<div class="task" markdown="1">
## Task

- Adapt your Sinatra code so that your contact form sends the user an email when they submit the form.
- Read through the [Pony documentation](https://github.com/benprew/pony#readme) and figure out what other things you can do with Pony and Mailgun - can you send a HTML-formatted email? Can you add attachments? What about sending an email to multiple recipients (you might have to Google this one)?
</div>

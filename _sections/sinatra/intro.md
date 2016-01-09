---
title: "Sinatra: An Introduction"
---

## Sinatra: An Introduction

Sinatra is a framework for building lightweight web applications. We will install Sinatra using RubyGems - type the following into your terminal:

{% highlight bash %}
gem install sinatra
{% endhighlight %}

(if this doesn't work, you may have to add `sudo` to the front of the command and try again - the terminal will ask for your password).

Then we will create a baseline Sinatra application - call it **hello.rb** (.rb is the extension given to all Ruby files) - which will look like this:

{% highlight ruby %}
require 'sinatra'

get('/') do
  "Hello World"
end
{% endhighlight %}

## Imports

You might have noticed that at the very beginning of the file we are doing:

{% highlight ruby %}
require 'sinatra'
{% endhighlight %}

this is Ruby's way of letting you import the code from different modules and libraries to use.

In this case, we already have Sinatra installed, so we can safely `require` it. If you tried to `require` a module or library that was not installed using RubyGems, then you would get an error.

## Sinatra routes

The rest of the code is using Sinatra's `get` function to define a *route* (a URL that we can recognise and respond to). The argument to the function is the URL we want to respond to - in this case we're specified the root URL (`/`). When Sinatra receives a request with this URL, it will run the code between the `do .. end` (this is called a *block*, and send back to the browser whatever we return - remember that Ruby will return whatever the last expression is.

<div class="task" markdown="1">
## Task:

- Run the simple hello.py application by doing `ruby hello.py` and hitting enter
- Navigate to [localhost:4567](http://localhost:4567) in your browser and confirm that you see the message expected
- Make a change to hello.py - return something other than Hello World! - refresh the page in your browser and see what happens (you will need to reboot your server in the meantime by pressing `Ctrl+C`)
- Try visiting a URL like [localhost:4567/i/dont/exist](http://localhost:4567/i/dont/exist) - what happens?
</div>

---
title: Serving your HTML using Sinatra
---

## Serving your HTML using Sinatra

Sinatra lets you serve your HTML - this is possible using the `erb` function. All you have to do is provide the name of the template and the variables you want to pass to the template engine as keyword arguments. Heres a simple example of how to render a template:

{% highlight ruby %}
require 'sinatra'

get('/') do
  erb :hello
end

get('/:name') do
  @name = params[:name].capitalize

  erb :hello
end
{% endhighlight %}

Note: Sinatra will look for templates in the `views` folder.

Sinatra uses another library called **ERB**, which is a templating language for Ruby. It's extremely powerful, but it's beyond the scope of this course. If you are interested however, go ahead and read up on it and make use of it.

Here is what an example html file called `hello.erb` would look like, inside a `views` folder, that uses ERB:

{% highlight html+erb %}
<!doctype html>
<title>Hello from Sinatra</title>
<% if @name %>
  <h1>Hello <%= @name %>!</h1>
<% else %>
  <h1>Hello World!</h1>
<% end %>
{% endhighlight %}

<div class="task" markdown="1">
## Task

- Extend the above code so that you can say goodbye to someone if you visit [localhost:4567/goodbye/rob](http://localhost:4567/goodbye/rob) (or feel free to use any other name)
- Try to add some more parameters to the URL and pass those onto your hello.html template - for example [localhost:4567/goodbye/rob/day](http://localhost:4567/goodbye/rob/day) would say something like "Hello Rob! Have a good day", while [localhost:4567/goodbye/rob/night](http://localhost:4567/goodbye/rob/night) would say "Hello Rob! Have a good night".
</div>

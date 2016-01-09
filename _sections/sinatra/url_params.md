---
title: Taking parameters from the URL
---

## Taking parameters from the URL

Take a look at the following code:

{% highlight ruby %}
require 'sinatra'

get('/') do
  "hello"
end

get('/:name') do
  name = params[:name]
  name
end
{% endhighlight %}

The `:name` is a URL matcher - It will match `/` followed by any word, for example `/rob`, `/rachel` etc. Sinatra will make this value available as a parameter from the `params` hash. We then use the `name` variable to say hello to a particular user.

<div class="task" markdown="1">
## Task

- Add the new route to your `hello.rb` file and check that it works by visiting [localhost:4567/rob](http://localhost:4567/rob) or your own name if you prefer
- Try and make it so that visiting localhost:4567/bye/rob returns 'Goodbye Rob' or 'Goodbye' for any other name given
</div>

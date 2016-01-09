---
title: "GET & POST requests"
---

## GET & POST requests

In the world of HTTP, there are a number of types of requests - we will be concentrating on two of them:

- `GET` when you want to retrieve data
- `POST` when you want to send data

Everything we have been doing so far has been using a `GET` request - let's see how we can use a simple `POST` request. Let's add a form to `hello.erb`:

{% highlight html %}
<div id="contact-form">
  <h1>Get In Touch!</h1>
  <form method="post" action="/signup">
    <label for="name">Name: </label>
    <input type="text" id="name" name="name" value="" placeholder="Rob Paskin" required="required" autofocus="autofocus"/>
    <label for="email">Email address: </label>
    <input type="email" id="email" name="email" value="" placeholder="rob@example.com" required="required"/>
    <input type="submit" value="submit" id="submit-button">
  </form>
</div>
{% endhighlight %}

Pay attention to the `form` element which has an `action` equal to `/signup` - that's the URL which the form will be submitted to, relevant to the absolute URL you are at (in this case `localhost:4567`)- so we need to create an entry in our `hello.rb` file:

{% highlight ruby %}
post('/signup') do
  puts params[:name]
  puts params[:email]

  "All OK"
end
{% endhighlight %}

Notice that Sinatra makes our form values available in the same `params` hash as in our previous examples that used `GET` requests.

Now if you navigate to [localhost:4567/rob](http://localhost:4567/rob) then you should see something like this:

![Form in hello.rb](/images/sinatra_form.png)

<div class="task" markdown="1">
## Task

- Try submitting the form without entering any information and see what happens!
- Now fill in the form and submit it
- Go to your terminal or command prompt and have a look to see if you can spot the name and e-mail address you entered and submitted
- Extend the form in `hello.erb` to have another one or two input fields to capture some more information and ensure that this is printed out by `hello.rb`
</div>

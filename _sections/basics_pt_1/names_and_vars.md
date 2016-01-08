---
title: Names and variables
---

## Names & Variables

So far we have used `irb` as a clever calculator, by working with values directly. Programming becomes a lot more powerful when you're able to give values names. A name is just something that you can use to refer to a value. In Ruby you create a name by using the assignment operator, `=`.

{% highlight ruby %}
age = 5
{% endhighlight %}

You can change the value associated with a name at any point. It doesn't even have to be the same type of value as the first value assigned to the name. Here we change the value associated with age to a string:

{% highlight ruby %}
age = "almost three"
{% endhighlight %}

Variables should start with a lower-case letter.

## String interpolation

String interpolation is a way of taking a variable and putting it inside a string. To write a string in Ruby you can either use `'` (*single quote*) or `"` (*double quote*).

{% highlight ruby %}
string1 = 'hello'
string2 = "hello"
{% endhighlight %}

In the code above, string1 and string2 are exactly the same.

{% highlight ruby %}
age = 5
like = "painting"
age_description = "My age is #{age} and I like #{painting}."
#=> "My age is 5 and I like painting."
{% endhighlight %}

So what just happened here? Essentially, `#{}` let us insert (or *interpolate*) our variables into into the surrounding string.

As well as variables, we can also add some Ruby code:

{% highlight ruby %}
age_description = "My age is #{age * 4} and I like #{painting.upcase}."
#=> "My age is 20 and I like PAINTING."

"3 times 2 is #{3 * 2}"
#=> "3 times 2 is 6"
{% endhighlight %}

<div class="task" markdown="1">
## Task:

With your pair, decide what each of the following instructions will do. Test to see if you're right in `irb`.

- `a = 1`
- `a + 1`
- `a`
- `a = a + 1`
- `a`
- `b = "hello"`
- `b`
- `c = b.capitalize`
- `b`
- `c`
- `d = "hello"`
- `e = d.capitalize`
- `d`
- `e`
- `name = "Dave"`
- `f = "Hello #{name}!"`
- `f`
- `name = "Sarah"`
- `f`
- `f * 5`
</div>

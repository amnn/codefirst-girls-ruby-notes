---
title: Task Summary
---

## Task Summary

Before we move on to variables, we'll quickly look at a few of the things that you found out in the previous exercise:

{% highlight irb %}
>> 6 / 2
=> 3
>> 5 / 2
=> 2
>> 5.0 / 2
=> 2.5
>> 5 % 2
=> 1
{% endhighlight %}

If you give Ruby integers (whole numbers), it will do integer division.

For example, `5 / 2` gives `2` as it is the largest whole number of times you can remove 2 from 5. The partner to integer division is the remainder `5 % 2`, giving `1`. Together these two operations tell you that 2 goes twice into 5 with remainder 1. If you give Ruby decimals (floats) it will do normal division.

{% highlight irb %}
>> 2.even?
=> true
{% endhighlight %}

The line above is actually pretty special. We've just asked the value `2` a question and it's responded. In programming terms, this works because `2` is an *object* - something that contains both data and *methods* that can query/manipulate the data. In this case, `even?` is the method that we called.

{% highlight irb %}
>> "hello " + "world"
=> "hello world"
>> "hello".upcase
=> "HELLO"
{% endhighlight %}

Here you met another type of value: `"hello"` is a string. As you see here, you can add strings together. Like all Ruby values, strings are also objects and therefore have methods. Here we used the `upper` method, to change the string into uppercase. You can find out more about the methods that strings have in the Ruby docs.

{% highlight irb %}
>> "Bob" + 3
TypeError: can't convert Fixnum into String
from (irb):1:in `+'
{% endhighlight %}

Turns out that you can't add a string to an integer. Have another read of the message that `irb` gave you. Can you figure out what it is saying? When something goes wrong, Ruby tries to be as helpful as it can (and show where the problem was).

Learning to interpret the errors that Ruby gives is an important part of learning to become a programmer.

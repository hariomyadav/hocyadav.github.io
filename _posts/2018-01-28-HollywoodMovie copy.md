---
title: "english movie"
date: 2018-01-28
tags: [data wrangling, data science, messy data, omprakash]
header:
  image: "/images/perceptron/percept.jpg"
excerpt: ""
mathjax: "true"

---

# H1 Heading

## H2 Heading

### H3 Heading

Here's some basic text.


<figure>
  <img src="{{ '/images/waterfront00.jpg' | relative_url }}" alt="screen shot of paragraphs with default indent style set">
  <figcaption>Example of the default paragraph style (indented first line and bottom margin removed).</figcaption>
</figure>


And here's some *italics*

<figure>
{% include gallery caption="This is a sample gallery with **Markdown support**." %}
</figure>

<figure>
{% include gallery id="gallery2" caption="This is a second gallery example with images hosted externally." %}
</figure>

Here's some **bold** text.

What about a [link](https://github.com/dataoptimal)?

Here's a bulleted list:
* First item
+ Second item
- Third item

Here's a numbered list:
1. First
2. Second
3. Third

Python code block:
```python
    import numpy as np

    def test_function(x, y):
      z = np.sum(x,y)
      return z
```

R code block:
```r
library(tidyverse)
df <- read_csv("some_file.csv")
head(df)
```

Here's some inline code `x+y`.

Here's an image:
<img src="{{ site.url }}{{ site.baseurl }}/images/perceptron/linsep.jpg" alt="linearly separable data">

Here's another image using Kramdown:
![alt]({{ site.url }}{{ site.baseurl }}/images/perceptron/linsep.jpg)

Here's some math:

$$z=x+y$$

You can also put it inline $$z=x+y$$

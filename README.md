## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/KoutchemeCharles/koutchemecharles.github.io/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/KoutchemeCharles/koutchemecharles.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

### Notes

GitHub partnered with Let's Encrypt in order to provides its users with free HTTPS connection. Let's encrypt certificates are available for a specific duration, but GitHub servers should automatically recreate a new certificate for our sites. However, this might fail sometimes (might be a bug) if you use a custom domain name. So what whill happen is that when people will try to reach your site, their browsers will display a NET::ERR_CERT_DATE_INVALID error page.  To solve the problem, check this post: https://help.github.com/en/articles/troubleshooting-custom-domains#https-errors

Personally, I :

-removed my custom domain name from my page's settings
-removed then readded CNAME records
-added back my custom domain name from my page's settings
-deleted and readded A records and CNAME record to my github page default name: koutchemecharles.github.io
The "enforce HTTPS"

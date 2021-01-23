# Image repo handler

~ currently WIP ~

A full-stack application that handles images upload. Based off the shopify backend project required for their 2021 summer internship - I didn't have time to work on it those days, but I liked the idea so ¯\\\_(ツ)\_/¯

## Current tech-stack

Back-end:

- Express
- Multer

Front-end:

- React

## Current functionalities

Image upload: a user can upload one or more images to a common repo folder located on the server - tested so far with up to 120 images at once. If an image with the same name already exists, a (1), (2) and so on is added to the name of the new image uploaded to avoid overwriting.

## What's next

Users and roles:
users can upload/delete/update images to their storage, users can make them public/privates. Still unsure about admin powers, feel free to suggest.

Sell & buy:
users can select which images to sell, use Stripe for purchase experience.

Publishing:
Once the application is solid, deploy it and use a platform like Cloudinary to handle image storage.

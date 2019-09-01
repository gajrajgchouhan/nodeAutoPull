# Configure webhook for your website

## Why?
By adding a webhook to your websites github repository your website hosted on SNTC server will automatically update whenever you commit a change to it.
## Prerequisites
### Contact an SNTC Server Team to recieve
1. Webhook URL
2. Webhook Secret Key

You can also generate your own secret by using something like [Random Keygen](https://randomkeygen.com/)
or blindly smashing your keyboard , after generating your own secret send it to us so that we can pair it up with your webhook url.

**Note** : If you generate the secret by yourself and don't have the secret configured in sntc by contacting sntc server team your first few events will return an error and your website won't update till the secret is paired up with your webhook url

## Adding the Webhook URL to your repository
1. Open your repository on github,  goto Webhook option under Security tab and select Add Webhook
![fig 1, Add Webhook](https://i.ibb.co/j8SJM1T/Screenshot-from-2019-08-31-19-39-49.png)
2. Enter the options
    Webhook URL -> Payload URL
    Webhook Secret -> Secret
    Content Type -> application/json  
  ![Webhook details](https://i.ibb.co/xFXg875/Screenshot-from-2019-08-31-19-44-50.png)  
3. Add the Webhook

## Checking your Webhook
You can check if your changes are being deployed to sntc server by selecting any event under Recent Deliveries and selecting the response tab.
It will either give a success message (eg. 'git pull succesful') or an error like ('Something broke: Contact Server Team')  

![Delivery Info](https://i.ibb.co/QdXNp9N/Screenshot-from-2019-08-31-19-48-06.png)  
![Delivery Success](https://i.ibb.co/x8SXPNT/Screenshot-from-2019-08-31-19-58-02.png)  

These errors might be due to a merge conflict or a signature verification failure.
Such issues are automatically detected and once the server team patches it, your website will be updated automatically or you will be required to redeliver the event by selecting the redeliver option

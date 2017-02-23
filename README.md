
# What is Redis Connection Monitor?

Redis Connection Monitor is a very simple connection tester for Redis. It connects to Redis every 5 seconds and logs the results. 

Run it like this:

```bash
docker run --name redistester -e REDIS_HOST='foo.bar.com' -e REDIS_KEY='1234' hyperfish/redistester:latest
```

# Get the image

```bash
docker pull hyperfish/redistester:latest
```


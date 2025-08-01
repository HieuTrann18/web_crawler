import requests
from pymongo import MongoClient
from bs4 import BeautifulSoup
from bson.objectid import ObjectId

client = MongoClient("mongodb://localhost:27017/")
db = client["crawler_db"]
collection = db["articles"]


url = 'https://vnexpress.net/'
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

articles = soup.select("article.item-news")
for article in articles:
    title_tag = article.select_one("h3.title-news a")
    desc_tag = article.select_one("p.description a")
    img_tag = article.select_one(".thumb-art img")


    

    title = title_tag.text.strip() if title_tag else None
    link = title_tag["href"] if title_tag and title_tag.has_attr("href") else None
    description = desc_tag.text.strip() if desc_tag else None
    image_url = img_tag["src"] if img_tag and img_tag.has_attr("src") else None

    image_url = None
    if img_tag:
        if img_tag.has_attr("data-src"):
            image_url = img_tag["data-src"]
        elif img_tag.has_attr("src") and not img_tag["src"].startswith("data:image"):
            image_url = img_tag["src"]

  
    


   
        

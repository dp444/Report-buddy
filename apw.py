DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': 'shopeasy_db',
           'USER': 'shopeasy_user',
           'PASSWORD': 'securepassword',
           'HOST': 'localhost',
           'PORT': '5432',
       }
   }
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
       name = models.CharField(max_length=100)
       description = models.TextField()

class Product(models.Model):
       name = models.CharField(max_length=100)
       description = models.TextField()
       price = models.DecimalField(max_digits=10, decimal_places=2)
       stock = models.IntegerField()
       category = models.ForeignKey(Category, on_delete=models.CASCADE)

class Order(models.Model):
       user = models.ForeignKey(User, on_delete=models.CASCADE)
       product = models.ForeignKey(Product, on_delete=models.CASCADE)
       quantity = models.IntegerField()
       order_date = models.DateTimeField(auto_now_add=True)
from .models import Product

def add_product(name, description, price, stock, category):
       product = Product(name=name, description=description, price=price, stock=stock, category=category)
       product.save()
def get_all_products():
       return Product.objects.all()
from django.contrib import adminfrom.models import Product, Category, Order, Cart

   admin.site.register(Product)
   admin.site.register(Category)
   admin.site.register(Order)
   admin.site.register(Cart)
# Generated by Django 5.0.6 on 2024-07-10 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('equpment_app', '0010_remove_order_sent_to_supplier_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='branch',
            name='active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='supplier',
            name='active',
            field=models.BooleanField(default=True),
        ),
    ]
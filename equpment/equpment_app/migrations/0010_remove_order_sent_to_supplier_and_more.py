# Generated by Django 5.0.6 on 2024-07-10 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('equpment_app', '0009_branch_address'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='sent_to_supplier',
        ),
        migrations.AddField(
            model_name='orderdetails',
            name='sent_to_supplier',
            field=models.BooleanField(default=False),
        ),
    ]

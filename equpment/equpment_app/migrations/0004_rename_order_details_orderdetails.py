# Generated by Django 5.0.6 on 2024-06-12 16:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('equpment_app', '0003_alter_branch_next_order'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Order_Details',
            new_name='OrderDetails',
        ),
    ]

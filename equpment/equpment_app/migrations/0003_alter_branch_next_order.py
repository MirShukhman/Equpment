# Generated by Django 5.0.6 on 2024-06-10 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('equpment_app', '0002_rename_deault_branch_user_default_branch_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='branch',
            name='next_order',
            field=models.DateField(blank=True, null=True),
        ),
    ]
# Generated by Django 5.0.6 on 2024-07-02 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('equpment_app', '0006_user_is_staff'),
    ]

    operations = [
        migrations.AddField(
            model_name='equpment',
            name='active',
            field=models.BinaryField(default=True),
        ),
    ]

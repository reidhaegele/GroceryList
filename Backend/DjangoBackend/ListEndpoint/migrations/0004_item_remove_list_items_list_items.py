# Generated by Django 4.2.11 on 2024-04-24 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ListEndpoint', '0003_remove_list_user_list_users'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('name', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('category', models.CharField(max_length=100)),
                ('quantity', models.IntegerField()),
                ('price', models.FloatField()),
            ],
        ),
        migrations.RemoveField(
            model_name='list',
            name='items',
        ),
        migrations.AddField(
            model_name='list',
            name='items',
            field=models.ManyToManyField(blank=True, to='ListEndpoint.item'),
        ),
    ]

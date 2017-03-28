import React from 'react';
import renderer from 'react-test-renderer';

import Banner from '../src/components/Banner.jsx';
import Tweet from '../src/components/Tweet.jsx';
import Header from '../src/components/Header.jsx';
import TwitterUser from '../src/components/TwitterUser.jsx';
import User from '../src/components/User.jsx';

it('renders Banner', () => {
  const banner1 = renderer.create(<Banner src="https://pbs.twimg.com/profile_banners/31472986/1390867474/600x200" alt="banner" />).toJSON();
  expect(banner1).toMatchSnapshot();


  const banner3 = renderer.create(<Banner />).toJSON();
  expect(banner3).toMatchSnapshot();
});

it('renders Tweet', () => {

  const tweet1 = renderer.create(<Tweet text="@T_Lorena, a gente pode te ajudar por aqui. Fala com a gente por DM e conta o que aconteceu!" in_reply_to_screen_name="T_Lorena" user={{
      "id": 35019751,
      "id_str": "35019751",
      "name": "americanas.com",
      "screen_name": "americanascom",
      "location": "Brasil",
      "description": "A maior loja na palma da sua mão: https://t.co/J5pdYz5brU",
      "url": "http://t.co/PfJKJTZmj1",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/PfJKJTZmj1",
              "expanded_url": "http://www.americanas.com",
              "display_url": "americanas.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "https://t.co/J5pdYz5brU",
              "expanded_url": "https://goo.gl/Ntg9wN",
              "display_url": "goo.gl/Ntg9wN",
              "indices": [
                34,
                57
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 246609,
      "friends_count": 2415,
      "listed_count": 2547,
      "created_at": "Fri Apr 24 19:51:14 +0000 2009",
      "favourites_count": 31,
      "utc_offset": -10800,
      "time_zone": "Brasilia",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 26590,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "E60014",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/754180801/ea96f827e4c0f1f5f368dff6bc1f545e.gif",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/754180801/ea96f827e4c0f1f5f368dff6bc1f545e.gif",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/777959576482287617/taEJPem9_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/777959576482287617/taEJPem9_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/35019751/1474315029",
      "profile_link_color": "A8A1A2",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "F5FDFF",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null,
      "translator_type": "none"
    }} entities={{
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "T_Lorena",
          "name": "Lorena Lima",
          "id": 58021583,
          "id_str": "58021583",
          "indices": [
            0,
            9
          ]
        }
      ],
      "urls": []
    }} />).toJSON();
  expect(tweet1).toMatchSnapshot();


  const tweet3 = renderer.create(<Tweet user={{}} entities={{}} />).toJSON();
  expect(tweet3).toMatchSnapshot();
});

it('renders Header', () => {
  const header1 = renderer.create(<Header tweets={ 5 } following={ 10 } followers={ 15 } likes={ 20 } />).toJSON();
  expect(header1).toMatchSnapshot();


  const header3 = renderer.create(<Header />).toJSON();
  expect(header3).toMatchSnapshot();
});

it('renders TwitterUser', () => {
  const twitteruser1 = renderer.create(<TwitterUser verified={ true } name="rafael" screen_name="rafacesar" />).toJSON();
  expect(twitteruser1).toMatchSnapshot();


  const twitteruser3 = renderer.create(<TwitterUser />).toJSON();
  expect(twitteruser3).toMatchSnapshot();

  const twitteruser4 = renderer.create(<TwitterUser verified={ false } name="rafael" screen_name="rafacesar" />).toJSON();
  expect(twitteruser4).toMatchSnapshot();
});

it('renders User', () => {


  const user1 = renderer.create(<User img="https://pbs.twimg.com/profile_banners/31472986/1390867474/600x200" verified={ true } name="rafael" screen_name="rafacesar" description="A maior loja na palma da sua mão: https://t.co/J5pdYz5brU" entities={ {
    "url": {
      "urls": [
        {
          "url": "http://t.co/PfJKJTZmj1",
          "expanded_url": "http://www.americanas.com",
          "display_url": "americanas.com",
          "indices": [
            0,
            22
          ]
        }
      ]
    },
    "description": {
      "urls": [
        {
          "url": "https://t.co/J5pdYz5brU",
          "expanded_url": "https://goo.gl/Ntg9wN",
          "display_url": "goo.gl/Ntg9wN",
          "indices": [
            34,
            57
          ]
        }
      ]
    }
  } } location="Brasil" url="https://twitter.com" since="1490660405657" />).toJSON();
  expect(user1).toMatchSnapshot();


  const user3 = renderer.create(<User />).toJSON();
  expect(user3).toMatchSnapshot();
});
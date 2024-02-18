export interface RootObject {
  data: Data;
  response_type: string;
}

export interface Data {
  extra: null;
  first_id: string;
  last_id: string;
  list: List;
}

export interface List {
  allowed_home: string;
  auther_type: string;
  cache: number;
  cd: string;
  city: string;
  comments_count: string;
  displayCity: string;
  displayCityTrans: string;
  feed_reason: null;
  first_name: string;
  fp: boolean;
  id_: string;
  is_following: null;
  keywords: string;
  me_reacted: null;
  page_id: string;
  post_content: string;
  post_id: string;
  post_owner: string;
  post_reactions: PostReactions;
  pr: string;
  privacy: string;
  private_account: string;
  pt: string;
  send_count: number;
  sensitive: boolean;
  time: string;
  unix_time: string;
  user_bio: string;
  user_id: string;
  user_name: string;
  user_profile_pic: string;
  video?: Video;
  image?: Image;
}

export interface PostReactions {
  me_reacted: string;
  reactions: { [key: string]: number };
  total_count: number;
}

export interface Video {
  blurhash: string;
  duration: string;
  hls: string;
  micro: number;
  seconds: string;
  snap: string;
  video_height: string;
  video_id: string;
  video_name: string;
  video_width: string;
  views_count: string;
}

export interface Image {
  blurhash: string;
  image_height: string;
  image_id: string;
  image_width: string;
  img_id: string;
  name: string;
}

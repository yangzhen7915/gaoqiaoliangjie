
-- 创建文章分类表
CREATE TABLE categories (
  id int(11) NOT NULL AUTO_INCREMENT,
  slug varchar(200) NOT NULL COMMENT '别名，后期项目里面用来搜索用的',
  name varchar(50) NOT NULL COMMENT '分类名称',
  classname varchar(50) NOT NULL COMMENT '导航图标',
  PRIMARY KEY (id)
)
ENGINE = MYISAM
AUTO_INCREMENT = 1
CHARACTER SET utf8
COLLATE utf8_general_ci
COMMENT = '文章分类表';

-- 插入文章分类数据
INSERT INTO `categories` (`slug`, `name`,`classname`) VALUES
('uncategorized', '未分类',''),
('funny', '奇趣事','fa-glass'),
('living', '会生活','fa-fire'),
('travel', '爱旅行','fa-gift');

-- 创建评论表
CREATE TABLE comments (
  id int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  author varchar(100) NOT NULL COMMENT '作者',
  email varchar(200) NOT NULL COMMENT '邮箱',
  created datetime NOT NULL COMMENT '创建时间',
  content varchar(1000) NOT NULL COMMENT '内容',
  status varchar(50) NOT NULL COMMENT '状态（待审核（held）/ 准许（approved）/ 拒绝（rejected）/ 回收站（trashed））',
  post_id int(11) NOT NULL COMMENT '文章 ID',
  parent_id int(11) DEFAULT NULL COMMENT '父级 ID',
  PRIMARY KEY (id)
)
ENGINE = MYISAM
AUTO_INCREMENT = 508
AVG_ROW_LENGTH = 248
CHARACTER SET utf8
COLLATE utf8_general_ci
COMMENT = '文章分类表';

-- 评论数据
-- INSERT INTO `comments` (`author`, `email`, `created`, `content`, `status`, `post_id`, `parent_id`) VALUES
-- ('汪磊', 'w@zce.me', '2017-07-04 12:00:00', '这是一条测试评论，欢迎光临', 'approved1', 1, NULL),
-- ('嘿嘿', 'ee@gmail.com', '2017-07-05 09:10:00', '想知道香港回归的惊人内幕吗？快快与我取得联系', 'rejected', 1, NULL),
-- ('小右', 'www@gmail.com', '2017-07-06 14:10:00', '你好啊，交个朋友好吗？', 'held', 1, NULL),
-- ('汪磊', 'www@gmail.com', '2017-07-09 22:22:00', '不好', 'held', 1, 3),
-- ('汪磊', 'w@zce.me', '2017-07-09 18:22:00', 'How are you?', 'held', 1, 3),
-- ('小右', 'www@gmail.com', '2017-07-11 22:22:00', 'I am fine thank you and you?', 'held', 1, 5),
-- ('哈哈', 'hh@gmail.com', '2017-07-22 09:10:00', '一针见血', 'approved', 1, NULL);

-- options表

CREATE TABLE options (
  id int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `key` varchar(200) NOT NULL COMMENT '属性键',
  value text NOT NULL COMMENT '属性值',
  PRIMARY KEY (id)
)
ENGINE = MYISAM
CHARACTER SET utf8
COLLATE utf8_general_ci;

-- 插入选项表数据
INSERT INTO `options` ( `key`, `value`) VALUES
('site_url', 'http://localhost'),
('site_logo', '/static/assets/img/logo.png'),
('site_name', '阿里百秀 - 发现生活，发现美！'),
('site_description', '阿里百秀同阿里巴巴有咩关系，答案当然系一啲都冇'),
('site_keywords', '生活, 旅行, 自由, 诗歌, 科技'),
('site_footer', '<p>© 2016 XIU主题演示 本站主题由 themebetter 提供</p>'),
('comment_status', '1'),
('comment_reviewed', '1'),
('nav_menus', '[{\"icon\":\"fa fa-glass\",\"text\":\"奇趣事\",\"title\":\"奇趣事\",\"link\":\"/category/funny\"},{\"icon\":\"fa fa-phone\",\"text\":\"潮科技\",\"title\":\"潮科技\",\"link\":\"/category/tech\"},{\"icon\":\"fa fa-fire\",\"text\":\"会生活\",\"title\":\"会生活\",\"link\":\"/category/living\"},{\"icon\":\"fa fa-gift\",\"text\":\"美奇迹\",\"title\":\"美奇迹\",\"link\":\"/category/travel\"}]'),
( 'home_slides', '[{\"image\":\"/static/uploads/slide_1.jpg\",\"text\":\"轮播项一\",\"link\":\"https://zce.me\"},{\"image\":\"/static/uploads/slide_2.jpg\",\"text\":\"轮播项二\",\"link\":\"https://zce.me\"}]');


-- 文章表
CREATE TABLE posts (
  id int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  slug varchar(200) NOT NULL COMMENT '别名',
  title varchar(200) NOT NULL COMMENT '标题',
  feature varchar(200) DEFAULT NULL COMMENT '特色图像',
  created datetime NOT NULL COMMENT '创建时间',
  content text DEFAULT NULL COMMENT '内容',
  views int(11) NOT NULL DEFAULT 0 COMMENT '浏览数',
  likes int(11) NOT NULL DEFAULT 0 COMMENT '点赞数',
  status varchar(50) NOT NULL COMMENT '状态（drafted-草稿/published-已发布/trashed-已作废）',
  user_id int(11) NOT NULL COMMENT '用户 ID',
  category_id int(11) NOT NULL COMMENT '分类 ID',
  PRIMARY KEY (id)
)
ENGINE = MYISAM
AUTO_INCREMENT = 1
CHARACTER SET utf8
COLLATE utf8_general_ci;


-- 插入文章数据
-- INSERT INTO posts (`slug`, `title`, `feature`, `created`, `content`, `views`, `likes`, `status`, `user_id`, `category_id`) VALUES
-- ('hello-world', '世界，你好', '/uploads/2017/hello-world.jpg', '2017-07-01 08:08:00', '欢迎使用阿里百秀。这是您的第一篇文章。编辑或删除它，然后开始写作吧！', 222, 111, 'published', 1, 1),
-- ('simple-post-2', '第一篇示例文章', NULL, '2017-07-01 09:00:00', '欢迎使用阿里百秀。这是一篇示例文章', 123, 10, 'drafted', 1, 1),
-- ('simple-post-3', '第二篇示例文章', NULL, '2017-07-01 12:00:00', '欢迎使用阿里百秀。这是一篇示例文章', 20, 120, 'drafted', 1, 2),
-- ('simple-post-4', '第三篇示例文章', NULL, '2017-07-01 14:00:00', '欢迎使用阿里百秀。这是一篇示例文章', 40, 100, 'drafted', 1, 3);


-- 创建用户表
CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  slug varchar(200) NOT NULL COMMENT '别名',
  email varchar(200) NOT NULL COMMENT '邮箱',
  password varchar(200) NOT NULL COMMENT '密码',
  nickname varchar(100) DEFAULT NULL COMMENT '昵称',
  avatar varchar(200) DEFAULT NULL COMMENT '头像',
  bio varchar(500) DEFAULT NULL COMMENT '简介',
  status varchar(50) NOT NULL COMMENT '状态（未激活（unactivated）/ 激活（activated）/ 禁止（forbidden）/ 回收站（trashed））',
  PRIMARY KEY (id)
)
ENGINE = MYISAM
AUTO_INCREMENT = 1
CHARACTER SET utf8
COLLATE utf8_general_ci;

-- 用户表数据

INSERT INTO `users` ( `slug`, `email`, `password`, `nickname`, `avatar`, `bio`, `status`) VALUES
('admin', 'admin@zce.me', 'wanglei', '管理员', '/static/uploads/avatar.jpg', NULL, 'activated'),
('zce', 'w@zce.me', 'wanglei', '汪磊', '/static/uploads/avatar.jpg', NULL, 'unactivated'),
('ice', 'ice@wedn.net', 'wanglei', '汪磊', '/static/uploads/avatar.jpg', NULL, 'activated'),
('qq', 'ligoudan@bx.com', 'goudan', '李狗蛋', '/static/uploads/avatar.jpg', NULL, 'activated');




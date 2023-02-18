import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface _05ced53a05b358caA7a16f2159d7f9d220221031074224Vrepl {
  id: Generated<number>;
  text_content: string;
  slug: string | null;
  oldSlug: string | null;
}

export interface _1373b5d2Ac3e5647A385F5b9800af02020221031074323Vrepl {
  id: Generated<number>;
  title: string;
  description: string | null;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  imageAlt: string | null;
  slug: string | null;
  oldSlug: string | null;
  isRoot: Generated<number>;
  isFinished: Generated<number>;
  isReadMore: Generated<number>;
}

export interface _1f9b8e970210571e8657D1d3df1f02c720221031073220Vrepl {
  id: Generated<number>;
  name: string;
  title: string;
  path: string;
  content: string;
  meta: string;
  created_at: Generated<Date>;
}

export interface _277185b74d6854998ce44b8bf6f00a9a20221031073211Vrepl {
  id: Generated<number>;
  title: string | null;
  isTitleHidden: Generated<number>;
  isReadMore: Generated<number>;
  text_content: string | null;
  orderIndex: number | null;
}

export interface _3920ee1aBa7858c486e10c833797739b20221107074810Vrepl {
  id: Generated<number>;
  title: string;
  dropDownType: string | null;
  type: string;
  publish: string;
  slug: string;
  oldSlug: string;
  nested: string | null;
  item_id: number | null;
  orderIndex: number | null;
  top_level_id: number;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface _3e124dce5756547d92bf7f5e965b6fb020221031091744Vrepl {
  id: Generated<number>;
  title: string | null;
  isTitleHidden: Generated<number>;
  isReadMore: Generated<number>;
  text_content: string | null;
  orderIndex: number | null;
}

export interface _4117339920aa5e54A951548362403eb120221031074333Vrepl {
  id: Generated<number>;
  title: string | null;
  description: string | null;
  topic_SectionId: number | null;
  topic_PageId: number | null;
}

export interface _4c7dcd3b17b851e7B93dD4764dae54b520230218195526Vrepl {
  id: Generated<number>;
  name: string;
  user_id: string | null;
  assignee_id: string | null;
  order_id: number | null;
  email: string;
  subject: string;
  department: string;
  message: string;
  priority: Generated<string>;
  status: Generated<string>;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface _4f0aab6bE2ba5a91A736F088971bdfed20230218195820Vrepl {
  id: string;
  support_ticket_id: number | null;
  filename: string;
  url: Generated<string>;
  upload_key: string;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  bucket: string;
}

export interface _520690ed845e5fe7A815981d2a074b2320230218195815Vrepl {
  id: Generated<number>;
  user_email: string | null;
  massage: string;
  ticket_id: number | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface _578eb50804b75284B1721c4e12f300c420230218195516Vrepl {
  id: Generated<number>;
  user_id: string | null;
  message: string;
  ticket_id: number | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface _59d1efe5500259c0B7a213839b1c678220220827160000Vrepl {
  id: Generated<number>;
  short_description: string | null;
  description: string | null;
  date_published: Date | null;
  image: string | null;
  title: string;
  oldSlug: string | null;
  slug: string | null;
  author: string | null;
  contributors: string | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  year_published: number | null;
  imageHeight: number | null;
  imageWidth: number | null;
  translator: string | null;
  editor: string | null;
  publisher: string | null;
  imageAlt: string | null;
}

export interface _5c82951f9e8f51adA015Ef7e4e0ee18f20221031074343Vrepl {
  id: Generated<number>;
  title: string | null;
  isTitleHidden: Generated<number>;
  isReadMore: Generated<number>;
  text_content: string | null;
  orderIndex: number | null;
}

export interface _5c9f5be1B89c5ad583b9Dc4ef824dc0520221031073152Vrepl {
  id: Generated<number>;
  text_content: string;
  slug: string | null;
  oldSlug: string | null;
}

export interface _5d3fc52989045d50Ac71Fdda26be417320220827055415Vrepl {
  id: Generated<number>;
  short_description: string | null;
  description: string | null;
  date_published: Date | null;
  image: string | null;
  title: string;
  oldSlug: string | null;
  slug: string | null;
  author: string | null;
  contributors: string | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  year_published: number | null;
  imageHeight: number | null;
  imageWidth: number | null;
  translator: string | null;
  editor: string | null;
  publisher: string | null;
  imageAlt: string | null;
}

export interface _62386a2eA77d57eb9e84407529fdf2a320221031073206Vrepl {
  id: Generated<number>;
  title: string | null;
  description: string | null;
  topic_SectionId: number | null;
  topic_PageId: number | null;
}

export interface _64394d51A65c5ca88478Acf9fd06dd9820221031091604Vrepl {
  id: Generated<number>;
  text_content: string;
  slug: string | null;
  oldSlug: string | null;
}

export interface _687971281e985e8aA6eeA2f219ff969420221031091724Vrepl {
  id: Generated<number>;
  title: string | null;
  description: string | null;
  topic_SectionId: number | null;
  topic_PageId: number | null;
}

export interface _71e5b78a93ce5d9aBde18b6dfa3a573020230218195825Vrepl {
  id: Generated<number>;
  name: string;
  email: string;
  subject: string;
  department: string;
  massage: string;
  file: string | null;
  priority: Generated<string>;
  status: Generated<string>;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  assignee_id: string | null;
  order_id: number | null;
  user_id: string | null;
}

export interface _763e9f15280c5a718550476102cb7dcb20220827055120Vrepl {
  id: Generated<number>;
  short_description: string | null;
  description: string | null;
  date_published: Date | null;
  image: string | null;
  title: string;
  oldSlug: string | null;
  slug: string | null;
  author: string | null;
  contributors: string | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  year_published: number | null;
  imageHeight: number | null;
  imageWidth: number | null;
  translator: string | null;
  editor: string | null;
  publisher: string | null;
  imageAlt: string | null;
}

export interface _9ebb26077fb55a68997c37000776029820221031073203Vrepl {
  id: Generated<number>;
  title: string;
  description: string | null;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  imageAlt: string | null;
  slug: string | null;
  oldSlug: string | null;
  isRoot: Generated<number>;
  isFinished: Generated<number>;
  isReadMore: Generated<number>;
}

export interface _A4dca08eB65c5d15A62a3a4bf806e8e620221031091624Vrepl {
  id: Generated<number>;
  bookId: number | null;
  title: string;
  text_content: string;
  slug: string | null;
  oldSlug: string | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  orderIndex: number | null;
}

export interface _Aafc683cEc5f5b6c83672bad1327326d20221031073149Vrepl {
  id: Generated<number>;
  bookId: number | null;
  title: string;
  text_content: string;
  slug: string | null;
  oldSlug: string | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  orderIndex: number | null;
}

export interface _Adce066f782053c3898e0c570645ee8f20221107075444Vrepl {
  id: Generated<number>;
  title: string;
  dropDownType: string | null;
  type: string;
  publish: string;
  slug: string;
  oldSlug: string;
  nested: string | null;
  item_id: number | null;
  orderIndex: number | null;
  top_level_id: number;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface _B2349578368a5ba7Bebb9c3c65ca98c520221031073157Vrepl {
  id: Generated<number>;
  type: "AD_COMPANY_ADVERTISEMENT" | "ANNOUNCEMENT" | "BOOK" | "FEATURED_TEXT" | "GOOGLE_ADVERTISEMENT" | "MANUAL" | "PARSED" | "PARTNER_ADVERTISEMENT" | "POPULAR_PAGE" | "SCRAPED" | "SEARCH" | "SOCIAL_MEDIA" | "SPONSORED_ADVERTISEMENT" | "ST_SHOP_ADVERTISEMENT";
  title: string | null;
  text_content: string | null;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  link: string | null;
  date: Generated<Date | null>;
  orderIndex: number | null;
}

export interface _B3e2181d6f4d589a95417002eba94ea420221031074253Vrepl {
  id: Generated<number>;
  text_content: string;
  slug: string | null;
  oldSlug: string | null;
}

export interface _Bb53c9a900f1533aAe65F824b34b461120221031091644Vrepl {
  id: Generated<number>;
  type: "AD_COMPANY_ADVERTISEMENT" | "ANNOUNCEMENT" | "BOOK" | "FEATURED_TEXT" | "GOOGLE_ADVERTISEMENT" | "MANUAL" | "PARSED" | "PARTNER_ADVERTISEMENT" | "POPULAR_PAGE" | "SCRAPED" | "SEARCH" | "SOCIAL_MEDIA" | "SPONSORED_ADVERTISEMENT" | "ST_SHOP_ADVERTISEMENT";
  title: string | null;
  text_content: string | null;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  link: string | null;
  date: Generated<Date | null>;
  orderIndex: number | null;
}

export interface _Bea899fd6d1256869b601361115ed9e620220827113456Vrepl {
  id: Generated<number>;
  short_description: string | null;
  description: string | null;
  date_published: Date | null;
  image: string | null;
  title: string;
  oldSlug: string | null;
  slug: string | null;
  author: string | null;
  contributors: string | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  year_published: number | null;
  imageHeight: number | null;
  imageWidth: number | null;
  translator: string | null;
  editor: string | null;
  publisher: string | null;
  imageAlt: string | null;
}

export interface _BookToModule {
  A: number;
  B: number;
}

export interface _C038d4da5c1b5027B3a25369143fc66e20221031074353Vrepl {
  id: Generated<number>;
  name: string;
  title: string;
  path: string;
  content: string;
  meta: string;
  created_at: Generated<Date>;
}

export interface _D2a2ccd42e0b55ef8cb824d1c092cebd20221031091714Vrepl {
  id: Generated<number>;
  title: string;
  description: string | null;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  imageAlt: string | null;
  slug: string | null;
  oldSlug: string | null;
  isRoot: Generated<number>;
  isFinished: Generated<number>;
  isReadMore: Generated<number>;
}

export interface _D2edad10D6c15bb885d5148f9377af4020221031074244Vrepl {
  id: Generated<number>;
  bookId: number | null;
  title: string;
  text_content: string;
  slug: string | null;
  oldSlug: string | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  orderIndex: number | null;
}

export interface _D855725f64325c0cB6541362af7b5e3420221031073140Vrepl {
  id: Generated<number>;
  text_content: string;
  slug: string | null;
  oldSlug: string | null;
}

export interface _E33dc5d135545a61B1294dc9016d954720221031073144Vrepl {
  id: Generated<number>;
  title: string;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  imageAlt: string | null;
  description: string | null;
  short_description: string | null;
  scrapedIndex: string | null;
  date_published: Date | null;
  year_published: number | null;
  author: string | null;
  contributors: string | null;
  translator: string | null;
  editor: string | null;
  publisher: string | null;
  slug: string | null;
  oldSlug: string | null;
  importStatus: Generated<"MANUAL" | "PARSED" | "SCRAPED">;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface _Ea34bc4211925a48Bea8Ae65cbac1f6420221031091612Vrepl {
  id: Generated<number>;
  title: string;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  imageAlt: string | null;
  description: string | null;
  short_description: string | null;
  scrapedIndex: string | null;
  date_published: Date | null;
  year_published: number | null;
  author: string | null;
  contributors: string | null;
  translator: string | null;
  editor: string | null;
  publisher: string | null;
  slug: string | null;
  oldSlug: string | null;
  importStatus: Generated<"MANUAL" | "PARSED" | "SCRAPED">;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface _Ef4a378874e15e57Ab5437684366d25c20221031091634Vrepl {
  id: Generated<number>;
  text_content: string;
  slug: string | null;
  oldSlug: string | null;
}

export interface _F020986155a151548c1343594213f2b120221031091804Vrepl {
  id: Generated<number>;
  name: string;
  title: string;
  path: string;
  content: string;
  meta: string;
  created_at: Generated<Date>;
}

export interface _F3998c293bff5668B54d14cb410b5c6220230218195521Vrepl {
  id: string;
  support_ticket_id: number | null;
  filename: string;
  url: Generated<string>;
  upload_key: string;
  bucket: string;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface _F949cdf506a250b2Abd6Bcd675ee5e3a20221031074233Vrepl {
  id: Generated<number>;
  title: string;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  imageAlt: string | null;
  description: string | null;
  short_description: string | null;
  scrapedIndex: string | null;
  date_published: Date | null;
  year_published: number | null;
  author: string | null;
  contributors: string | null;
  translator: string | null;
  editor: string | null;
  publisher: string | null;
  slug: string | null;
  oldSlug: string | null;
  importStatus: Generated<"MANUAL" | "PARSED" | "SCRAPED">;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface _Ff92c80b42735c43A535225f8ec0a5ac20221031074303Vrepl {
  id: Generated<number>;
  type: "AD_COMPANY_ADVERTISEMENT" | "ANNOUNCEMENT" | "BOOK" | "FEATURED_TEXT" | "GOOGLE_ADVERTISEMENT" | "MANUAL" | "PARSED" | "PARTNER_ADVERTISEMENT" | "POPULAR_PAGE" | "SCRAPED" | "SEARCH" | "SOCIAL_MEDIA" | "SPONSORED_ADVERTISEMENT" | "ST_SHOP_ADVERTISEMENT";
  title: string | null;
  text_content: string | null;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  link: string | null;
  date: Generated<Date | null>;
  orderIndex: number | null;
}

export interface _PermissionToUserRole {
  A: number;
  B: number;
}

export interface _PopularPages {
  A: number;
  B: number;
}

export interface _RightModules {
  A: number;
  B: number;
}

export interface _TopicPageToTopicSection {
  A: number;
  B: number;
}

export interface _UserToUserRole {
  A: string;
  B: number;
}

export interface AboutUsPage {
  id: Generated<number>;
  text_content: string;
  slug: string | null;
  oldSlug: string | null;
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
}

export interface Author {
  id: Generated<number>;
  name: string;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface Book {
  id: Generated<number>;
  title: string;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  imageAlt: string | null;
  description: string | null;
  short_description: string | null;
  scrapedIndex: string | null;
  date_published: Date | null;
  year_published: number | null;
  author: string | null;
  contributors: string | null;
  translator: string | null;
  editor: string | null;
  publisher: string | null;
  importStatus: Generated<"MANUAL" | "PARSED" | "SCRAPED">;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  slug: string | null;
  oldSlug: string | null;
  routeId: number | null;
}

export interface BookChapter {
  id: Generated<number>;
  bookId: number | null;
  title: string;
  text_content: string;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  orderIndex: number | null;
  slug: string | null;
  oldSlug: string | null;
  routeId: number | null;
}

export interface BookLink {
  id: Generated<number>;
  topic_SectionId: number | null;
  bookId: number | null;
  orderIndex: number | null;
}

export interface FooterMenu {
  id: Generated<number>;
  title: string | null;
  item: string | null;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  imageAlt: string | null;
}

export interface HomePage {
  id: Generated<number>;
  text_content: string;
  slug: string | null;
  oldSlug: string | null;
}

export interface LeftMenuItem {
  id: Generated<number>;
  published: Generated<number>;
  orderIdx: Generated<number>;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  routeId: number;
  parent_Left_Menu_ItemId: number | null;
  nested_Left_Menu_ItemId: number | null;
}

export interface LegacyPages {
  id: Generated<number>;
  name: string;
  title: string;
  path: string;
  content: string;
  meta: string;
  created_at: Generated<Date>;
}

export interface LineItems {
  id: Generated<number>;
  line_item_id: string;
  fulfillment_service: string;
  grams: number;
  price: string;
  product_id: string;
  quantity: number;
  name: string;
  financial_status: string;
  sku: string;
  title: string;
  variant_id: string;
  variant_title: string;
  vendor: string;
  order_id: number;
  user_id: string | null;
  image: Generated<string>;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  userId: string | null;
}

export interface Module {
  id: Generated<number>;
  type: string | null;
  title: string | null;
  text_content: string | null;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  link: string | null;
  date: Generated<Date | null>;
  orderIndex: number | null;
  publish: Generated<string | null>;
  ImageAlt: string | null;
}

export interface NavTopicPageLink {
  id: Generated<number>;
  title: string;
  link: string;
}

export interface NestedTopics {
  id: Generated<number>;
  title: string;
  drop_down_type: string | null;
  type: string;
  publish: string;
  slug: string;
  is_slugify: Generated<number>;
  old_slug: Generated<string>;
  nested: string | null;
  item_id: number | null;
  order_index: number | null;
  top_level_id: number;
  topic_id: number | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface Orders {
  id: Generated<number>;
  name: string;
  financial_status: string;
  current_subtotal_price: Generated<string>;
  user_id: string | null;
  shopify_order_id: string;
  checkout_id: string;
  customer_id: string;
  confirmed: number;
  order_number: number;
  order_status_url: string;
  test: number;
  line_item_id: string | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  userId: string | null;
}

export interface Pages {
  id: Generated<number>;
  title: string;
  slug: string | null;
  text_content: string;
  category: string;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  routeId: number | null;
}

export interface Permission {
  id: Generated<number>;
  title: string;
}

export interface Rewrite {
  id: Generated<number>;
  from: string;
  to: string;
}

export interface Route {
  id: Generated<number>;
  oldSlug_title: string | null;
  oldSlug: string | null;
  title: Generated<string>;
  slug: Generated<string>;
  rewrite: number;
  redirect: number;
  isHidden: Generated<number>;
  type: "BOOK" | "BOOK_CHAPTER" | "PAGE" | "TOPIC" | null;
  verified: Generated<number>;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
}

export interface ShopifyPage {
  id: Generated<number>;
  slug: string | null;
  title: string;
  page_content: string;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface SupportTickets {
  id: Generated<number>;
  name: string;
  user_id: string | null;
  assignee_id: string | null;
  order_id: number | null;
  email: string;
  subject: string;
  department: string;
  message: Generated<string>;
  priority: Generated<string>;
  status: Generated<string>;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface TicketReply {
  id: Generated<number>;
  user_id: string | null;
  message: Generated<string>;
  ticket_id: number | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface TopicNames {
  id: Generated<number>;
  title: Generated<string>;
  drop_down_type: string | null;
  old_slug: Generated<string>;
  type: string;
  slug: Generated<string>;
  publish: string;
  nested: string | null;
  top_level_id: number | null;
  topic_id: number | null;
  order_index: number;
  is_slugify: Generated<number>;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface TopicPage {
  id: Generated<number>;
  title: string;
  description: string | null;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  imageAlt: string | null;
  isRoot: Generated<number>;
  isFinished: Generated<number>;
  isReadMore: Generated<number>;
  isSlugify: Generated<number>;
  slug: string | null;
  oldSlug: string | null;
  routeId: number | null;
}

export interface TopicPageLink {
  id: Generated<number>;
  title: string | null;
  description: string | null;
  topic_SectionId: number | null;
  topic_PageId: number | null;
}

export interface TopicSection {
  id: Generated<number>;
  title: string | null;
  isTitleHidden: Generated<number>;
  isReadMore: Generated<number>;
  text_content: string | null;
  orderIndex: number | null;
  section_slug: string | null;
}

export interface Topmenu {
  id: Generated<number>;
  title: string;
  dropDownType: string | null;
  oldSlug: Generated<string>;
  type: string;
  publish: string;
  slug: string;
  nested: string | null;
  top_level_id: number | null;
  order_index: number;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface TopMenuItem {
  id: Generated<number>;
  type: Generated<"DEFAULT" | "GENERAL_NAVIGATION">;
  published: Generated<number>;
  orderIdx: Generated<number>;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
  routeId: number;
}

export interface TopmenuNestedTopics {
  id: Generated<number>;
  title: string;
  dropDownType: string | null;
  type: string;
  publish: string;
  slug: string;
  oldSlug: Generated<string>;
  nested: string | null;
  item_id: number | null;
  orderIndex: number | null;
  top_level_id: number;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface Uploads {
  id: string;
  support_ticket_id: number | null;
  filename: string;
  url: Generated<string>;
  upload_key: string;
  bucket: string;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  password: string | null;
  firstName: Generated<string | null>;
  lastName: Generated<string | null>;
}

export interface UserRole {
  id: Generated<number>;
  title: string;
  isDefault: Generated<number>;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface VerificationToken {
  identifier: string;
  token: string;
  expires: Date;
}

export interface VerifiedBy {
  id: Generated<number>;
  created_at: Generated<Date>;
  userId: string;
  routeId: number | null;
}

export interface DB {
  _05ced53a_05b3_58ca_a7a1_6f2159d7f9d2_20221031074224_vrepl: _05ced53a05b358caA7a16f2159d7f9d220221031074224Vrepl;
  _1373b5d2_ac3e_5647_a385_f5b9800af020_20221031074323_vrepl: _1373b5d2Ac3e5647A385F5b9800af02020221031074323Vrepl;
  _1f9b8e97_0210_571e_8657_d1d3df1f02c7_20221031073220_vrepl: _1f9b8e970210571e8657D1d3df1f02c720221031073220Vrepl;
  _277185b7_4d68_5499_8ce4_4b8bf6f00a9a_20221031073211_vrepl: _277185b74d6854998ce44b8bf6f00a9a20221031073211Vrepl;
  _3920ee1a_ba78_58c4_86e1_0c833797739b_20221107074810_vrepl: _3920ee1aBa7858c486e10c833797739b20221107074810Vrepl;
  _3e124dce_5756_547d_92bf_7f5e965b6fb0_20221031091744_vrepl: _3e124dce5756547d92bf7f5e965b6fb020221031091744Vrepl;
  _41173399_20aa_5e54_a951_548362403eb1_20221031074333_vrepl: _4117339920aa5e54A951548362403eb120221031074333Vrepl;
  _4c7dcd3b_17b8_51e7_b93d_d4764dae54b5_20230218195526_vrepl: _4c7dcd3b17b851e7B93dD4764dae54b520230218195526Vrepl;
  _4f0aab6b_e2ba_5a91_a736_f088971bdfed_20230218195820_vrepl: _4f0aab6bE2ba5a91A736F088971bdfed20230218195820Vrepl;
  _520690ed_845e_5fe7_a815_981d2a074b23_20230218195815_vrepl: _520690ed845e5fe7A815981d2a074b2320230218195815Vrepl;
  _578eb508_04b7_5284_b172_1c4e12f300c4_20230218195516_vrepl: _578eb50804b75284B1721c4e12f300c420230218195516Vrepl;
  _59d1efe5_5002_59c0_b7a2_13839b1c6782_20220827160000_vrepl: _59d1efe5500259c0B7a213839b1c678220220827160000Vrepl;
  _5c82951f_9e8f_51ad_a015_ef7e4e0ee18f_20221031074343_vrepl: _5c82951f9e8f51adA015Ef7e4e0ee18f20221031074343Vrepl;
  _5c9f5be1_b89c_5ad5_83b9_dc4ef824dc05_20221031073152_vrepl: _5c9f5be1B89c5ad583b9Dc4ef824dc0520221031073152Vrepl;
  _5d3fc529_8904_5d50_ac71_fdda26be4173_20220827055415_vrepl: _5d3fc52989045d50Ac71Fdda26be417320220827055415Vrepl;
  _62386a2e_a77d_57eb_9e84_407529fdf2a3_20221031073206_vrepl: _62386a2eA77d57eb9e84407529fdf2a320221031073206Vrepl;
  _64394d51_a65c_5ca8_8478_acf9fd06dd98_20221031091604_vrepl: _64394d51A65c5ca88478Acf9fd06dd9820221031091604Vrepl;
  _68797128_1e98_5e8a_a6ee_a2f219ff9694_20221031091724_vrepl: _687971281e985e8aA6eeA2f219ff969420221031091724Vrepl;
  _71e5b78a_93ce_5d9a_bde1_8b6dfa3a5730_20230218195825_vrepl: _71e5b78a93ce5d9aBde18b6dfa3a573020230218195825Vrepl;
  _763e9f15_280c_5a71_8550_476102cb7dcb_20220827055120_vrepl: _763e9f15280c5a718550476102cb7dcb20220827055120Vrepl;
  _9ebb2607_7fb5_5a68_997c_370007760298_20221031073203_vrepl: _9ebb26077fb55a68997c37000776029820221031073203Vrepl;
  _a4dca08e_b65c_5d15_a62a_3a4bf806e8e6_20221031091624_vrepl: _A4dca08eB65c5d15A62a3a4bf806e8e620221031091624Vrepl;
  _aafc683c_ec5f_5b6c_8367_2bad1327326d_20221031073149_vrepl: _Aafc683cEc5f5b6c83672bad1327326d20221031073149Vrepl;
  _adce066f_7820_53c3_898e_0c570645ee8f_20221107075444_vrepl: _Adce066f782053c3898e0c570645ee8f20221107075444Vrepl;
  _b2349578_368a_5ba7_bebb_9c3c65ca98c5_20221031073157_vrepl: _B2349578368a5ba7Bebb9c3c65ca98c520221031073157Vrepl;
  _b3e2181d_6f4d_589a_9541_7002eba94ea4_20221031074253_vrepl: _B3e2181d6f4d589a95417002eba94ea420221031074253Vrepl;
  _bb53c9a9_00f1_533a_ae65_f824b34b4611_20221031091644_vrepl: _Bb53c9a900f1533aAe65F824b34b461120221031091644Vrepl;
  _bea899fd_6d12_5686_9b60_1361115ed9e6_20220827113456_vrepl: _Bea899fd6d1256869b601361115ed9e620220827113456Vrepl;
  _BookToModule: _BookToModule;
  _c038d4da_5c1b_5027_b3a2_5369143fc66e_20221031074353_vrepl: _C038d4da5c1b5027B3a25369143fc66e20221031074353Vrepl;
  _d2a2ccd4_2e0b_55ef_8cb8_24d1c092cebd_20221031091714_vrepl: _D2a2ccd42e0b55ef8cb824d1c092cebd20221031091714Vrepl;
  _d2edad10_d6c1_5bb8_85d5_148f9377af40_20221031074244_vrepl: _D2edad10D6c15bb885d5148f9377af4020221031074244Vrepl;
  _d855725f_6432_5c0c_b654_1362af7b5e34_20221031073140_vrepl: _D855725f64325c0cB6541362af7b5e3420221031073140Vrepl;
  _e33dc5d1_3554_5a61_b129_4dc9016d9547_20221031073144_vrepl: _E33dc5d135545a61B1294dc9016d954720221031073144Vrepl;
  _ea34bc42_1192_5a48_bea8_ae65cbac1f64_20221031091612_vrepl: _Ea34bc4211925a48Bea8Ae65cbac1f6420221031091612Vrepl;
  _ef4a3788_74e1_5e57_ab54_37684366d25c_20221031091634_vrepl: _Ef4a378874e15e57Ab5437684366d25c20221031091634Vrepl;
  _f0209861_55a1_5154_8c13_43594213f2b1_20221031091804_vrepl: _F020986155a151548c1343594213f2b120221031091804Vrepl;
  _f3998c29_3bff_5668_b54d_14cb410b5c62_20230218195521_vrepl: _F3998c293bff5668B54d14cb410b5c6220230218195521Vrepl;
  _f949cdf5_06a2_50b2_abd6_bcd675ee5e3a_20221031074233_vrepl: _F949cdf506a250b2Abd6Bcd675ee5e3a20221031074233Vrepl;
  _ff92c80b_4273_5c43_a535_225f8ec0a5ac_20221031074303_vrepl: _Ff92c80b42735c43A535225f8ec0a5ac20221031074303Vrepl;
  _PermissionToUser_Role: _PermissionToUserRole;
  _popular_pages: _PopularPages;
  _right_modules: _RightModules;
  _Topic_PageToTopic_Section: _TopicPageToTopicSection;
  _UserToUser_Role: _UserToUserRole;
  About_Us_Page: AboutUsPage;
  Account: Account;
  Author: Author;
  Book: Book;
  Book_Chapter: BookChapter;
  Book_Link: BookLink;
  Footer_Menu: FooterMenu;
  Home_Page: HomePage;
  Left_Menu_Item: LeftMenuItem;
  legacy_pages: LegacyPages;
  Line_Items: LineItems;
  Module: Module;
  Nav_Topic_Page_Link: NavTopicPageLink;
  Nested_Topics: NestedTopics;
  Orders: Orders;
  Pages: Pages;
  Permission: Permission;
  Rewrite: Rewrite;
  Route: Route;
  Session: Session;
  Shopify_Page: ShopifyPage;
  support_tickets: SupportTickets;
  Ticket_Reply: TicketReply;
  Top_Menu_Item: TopMenuItem;
  Topic_Names: TopicNames;
  Topic_Page: TopicPage;
  Topic_Page_Link: TopicPageLink;
  Topic_Section: TopicSection;
  Topmenu: Topmenu;
  Topmenu_Nested_Topics: TopmenuNestedTopics;
  Uploads: Uploads;
  User: User;
  User_Role: UserRole;
  VerificationToken: VerificationToken;
  Verified_By: VerifiedBy;
}

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type ChangePasswordAfterVerifyingInput = {
  code: Scalars['String'];
  password: Scalars['String'];
};

export type ChangePasswordAfterVerifyingOutput = {
  __typename?: 'ChangePasswordAfterVerifyingOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CheckPasswordInput = {
  password: Scalars['String'];
};

export type CheckPasswordOutput = {
  __typename?: 'CheckPasswordOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CoreOutput = {
  __typename?: 'CoreOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateFeedbackInput = {
  content: Scalars['String'];
};

export type CreateFeedbackOutput = {
  __typename?: 'CreateFeedbackOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateMockExamCategoryInput = {
  name: Scalars['String'];
};

export type CreateMockExamCategoryOutput = {
  __typename?: 'CreateMockExamCategoryOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateMockExamInput = {
  categoryName: Scalars['String'];
  title: Scalars['String'];
};

export type CreateMockExamOutput = {
  __typename?: 'CreateMockExamOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateMockExamQuestionCommentInput = {
  content: Scalars['String'];
  questionId: Scalars['Float'];
};

export type CreateMockExamQuestionCommentOutput = {
  __typename?: 'CreateMockExamQuestionCommentOutput';
  comment: MockExamQuestionComment;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateMockExamQuestionFeedbackInput = {
  content: Scalars['String'];
  questionId: Scalars['Float'];
};

export type CreateMockExamQuestionFeedbackOutput = {
  __typename?: 'CreateMockExamQuestionFeedbackOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateMockExamQuestionInput = {
  mockExamId: Scalars['Float'];
  number: Scalars['Float'];
  question: Scalars['String'];
  question_img?: InputMaybe<Array<MockExamQuestionImageInputType>>;
  solution: Scalars['String'];
  solution_img?: InputMaybe<Array<MockExamQuestionImageInputType>>;
};

export type CreateMockExamQuestionOutput = {
  __typename?: 'CreateMockExamQuestionOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateNoticeInput = {
  content: Scalars['String'];
  reservationTime?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Float'];
};

export type CreateNoticeOutput = {
  __typename?: 'CreateNoticeOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateOrUpdateMockExamQuestionStateInput = {
  questionId: Scalars['Float'];
  state: QuestionState;
};

export type CreateOrUpdateMockExamQuestionStateOutput = {
  __typename?: 'CreateOrUpdateMockExamQuestionStateOutput';
  currentState?: Maybe<QuestionState>;
  error?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteMockExamCategoryInput = {
  id: Scalars['Float'];
};

export type DeleteMockExamCategoryOutput = {
  __typename?: 'DeleteMockExamCategoryOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteMockExamInput = {
  id: Scalars['Float'];
};

export type DeleteMockExamOutput = {
  __typename?: 'DeleteMockExamOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteMockExamQuestionCommentInput = {
  id: Scalars['Float'];
};

export type DeleteMockExamQuestionCommentOutput = {
  __typename?: 'DeleteMockExamQuestionCommentOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteMockExamQuestionFeedbackInput = {
  id: Scalars['Float'];
};

export type DeleteMockExamQuestionFeedbackOutput = {
  __typename?: 'DeleteMockExamQuestionFeedbackOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteMockExamQuestionInput = {
  id: Scalars['Float'];
};

export type DeleteMockExamQuestionOutput = {
  __typename?: 'DeleteMockExamQuestionOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteNoticeInput = {
  noticeId: Scalars['Float'];
};

export type DeleteNoticeOutput = {
  __typename?: 'DeleteNoticeOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditMockExamCategoryInput = {
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type EditMockExamInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['Float'];
};

export type EditMockExamOutput = {
  __typename?: 'EditMockExamOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditMockExamQuestionBookmarkInput = {
  questionId: Scalars['Float'];
};

export type EditMockExamQuestionBookmarkOutput = {
  __typename?: 'EditMockExamQuestionBookmarkOutput';
  currentState: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditMockExamQuestionCommentInput = {
  content: Scalars['String'];
  id: Scalars['Float'];
};

export type EditMockExamQuestionCommentLikeInput = {
  commentId: Scalars['Float'];
};

export type EditMockExamQuestionCommentLikeOutput = {
  __typename?: 'EditMockExamQuestionCommentLikeOutput';
  currentState: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditMockExamQuestionCommentOutput = {
  __typename?: 'EditMockExamQuestionCommentOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditMockExamQuestionFeedbackInput = {
  content: Scalars['String'];
  id: Scalars['Float'];
};

export type EditMockExamQuestionFeedbackOutput = {
  __typename?: 'EditMockExamQuestionFeedbackOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditMockExamQuestionInput = {
  id: Scalars['Float'];
  question?: InputMaybe<Scalars['String']>;
  question_img?: InputMaybe<Array<MockExamQuestionImageInputType>>;
  solution?: InputMaybe<Scalars['String']>;
  solution_img?: InputMaybe<Array<MockExamQuestionImageInputType>>;
};

export type EditMockExamQuestionOutput = {
  __typename?: 'EditMockExamQuestionOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditNoticeInput = {
  confirm?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  noticeId: Scalars['Float'];
  reservationTime?: InputMaybe<Scalars['DateTime']>;
};

export type EditNoticeOutput = {
  __typename?: 'EditNoticeOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditProfileInput = {
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EmailVerificationInput = {
  code: Scalars['String'];
};

export type EmailVerificationOutput = {
  __typename?: 'EmailVerificationOutput';
  email: Scalars['String'];
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ExamTitleAndId = {
  __typename?: 'ExamTitleAndId';
  id: Scalars['Float'];
  title: Scalars['String'];
};

export type Feedback = {
  __typename?: 'Feedback';
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  user: User;
};

export type FindMyExamHistoryInput = {
  categoryIds: Array<Scalars['Float']>;
};

export type FindMyExamHistoryOutput = {
  __typename?: 'FindMyExamHistoryOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  titleAndId?: Maybe<Array<TitleAndId>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type MeOutput = {
  __typename?: 'MeOutput';
  error?: Maybe<Scalars['String']>;
  notices?: Maybe<Array<Notice>>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type MockExam = {
  __typename?: 'MockExam';
  approved: Scalars['Boolean'];
  created_at: Scalars['DateTime'];
  id: Scalars['Float'];
  mockExamCategory: MockExamCategory;
  mockExamQuestion: Array<MockExamQuestion>;
  mockExamQuestionState: Array<MockExamQuestion>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type MockExamCategory = {
  __typename?: 'MockExamCategory';
  created_at: Scalars['DateTime'];
  id: Scalars['Float'];
  mockExam: Array<MockExam>;
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type MockExamImageType = {
  __typename?: 'MockExamImageType';
  name: Scalars['String'];
  uid: Scalars['String'];
  url: Scalars['String'];
};

export type MockExamQuestion = {
  __typename?: 'MockExamQuestion';
  approved: Scalars['Boolean'];
  created_at: Scalars['DateTime'];
  id: Scalars['Float'];
  mockExam: MockExam;
  mockExamQuestionBookmark: Array<MockExamQuestionBookmark>;
  mockExamQuestionComment: Array<MockExamQuestionComment>;
  mockExamQuestionFeedback: Array<MockExamQuestionFeedback>;
  number: Scalars['Float'];
  question: Scalars['String'];
  question_img?: Maybe<Array<MockExamImageType>>;
  solution: Scalars['String'];
  solution_img?: Maybe<Array<MockExamImageType>>;
  state: Array<MockExamQuestionState>;
  updated_at: Scalars['DateTime'];
};

export type MockExamQuestionBookmark = {
  __typename?: 'MockExamQuestionBookmark';
  created_at: Scalars['DateTime'];
  id: Scalars['Float'];
  question: MockExamQuestion;
  updated_at: Scalars['DateTime'];
  user: User;
};

export type MockExamQuestionComment = {
  __typename?: 'MockExamQuestionComment';
  commentLike: Array<MockExamQuestionCommentLike>;
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['Float'];
  likeState: Scalars['Boolean'];
  likesCount: Scalars['Float'];
  question: MockExamQuestion;
  updated_at: Scalars['DateTime'];
  user: User;
};

export type MockExamQuestionCommentLike = {
  __typename?: 'MockExamQuestionCommentLike';
  comment: MockExamQuestionComment;
  created_at: Scalars['DateTime'];
  id: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  user: User;
};

export type MockExamQuestionFeedback = {
  __typename?: 'MockExamQuestionFeedback';
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['Float'];
  mockExamQuestion: MockExamQuestion;
  updated_at: Scalars['DateTime'];
  user: User;
};

export type MockExamQuestionImageInputType = {
  name: Scalars['String'];
  uid: Scalars['String'];
  url: Scalars['String'];
};

export type MockExamQuestionState = {
  __typename?: 'MockExamQuestionState';
  answer: Scalars['String'];
  created_at: Scalars['DateTime'];
  exam: MockExam;
  id: Scalars['Float'];
  question: MockExamQuestion;
  state: QuestionState;
  updated_at: Scalars['DateTime'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePasswordAfterVerifying: ChangePasswordAfterVerifyingOutput;
  checkPassword: CheckPasswordOutput;
  createFeedback: CreateFeedbackOutput;
  createMockExam: CreateMockExamOutput;
  createMockExamCategory: CreateMockExamCategoryOutput;
  createMockExamQuestion: CreateMockExamQuestionOutput;
  createMockExamQuestionComment: CreateMockExamQuestionCommentOutput;
  createMockExamQuestionFeedback: CreateMockExamQuestionFeedbackOutput;
  createNotice: CreateNoticeOutput;
  createOrUpdateMockExamQuestionState: CreateOrUpdateMockExamQuestionStateOutput;
  deleteAllNoticesOfMe: CoreOutput;
  deleteMockExam: DeleteMockExamOutput;
  deleteMockExamCategory: DeleteMockExamCategoryOutput;
  deleteMockExamQuestion: DeleteMockExamQuestionOutput;
  deleteMockExamQuestionComment: DeleteMockExamQuestionCommentOutput;
  deleteMockExamQuestionFeedback: DeleteMockExamQuestionFeedbackOutput;
  deleteNotice: DeleteNoticeOutput;
  deleteUser: CoreOutput;
  editMockExam: EditMockExamOutput;
  editMockExamCategory: DeleteMockExamCategoryOutput;
  editMockExamQuestion: EditMockExamQuestionOutput;
  editMockExamQuestionBookmark: EditMockExamQuestionBookmarkOutput;
  editMockExamQuestionComment: EditMockExamQuestionCommentOutput;
  editMockExamQuestionCommentLike: EditMockExamQuestionCommentLikeOutput;
  editMockExamQuestionFeedback: EditMockExamQuestionFeedbackOutput;
  editNotice: EditNoticeOutput;
  editProfile: EditProfileOutput;
  emailVerification: EmailVerificationOutput;
  login: LoginOutput;
  logout: CoreOutput;
  register: RegisterOutput;
  resetMyExamQuestionState: ResetMyExamQuestionStateOutput;
  restoreUser: CoreOutput;
  revalidate: RevalidateOutput;
  sendFindPasswordMail: SendFindPasswordMailOutput;
  sendVerificationMail: SendVerificationMailOutput;
  updateApprovedStateOfMockExamQuestion: UpdateApprovedStateOfMockExamQuestionOutput;
};


export type MutationChangePasswordAfterVerifyingArgs = {
  input: ChangePasswordAfterVerifyingInput;
};


export type MutationCheckPasswordArgs = {
  input: CheckPasswordInput;
};


export type MutationCreateFeedbackArgs = {
  input: CreateFeedbackInput;
};


export type MutationCreateMockExamArgs = {
  input: CreateMockExamInput;
};


export type MutationCreateMockExamCategoryArgs = {
  input: CreateMockExamCategoryInput;
};


export type MutationCreateMockExamQuestionArgs = {
  input: CreateMockExamQuestionInput;
};


export type MutationCreateMockExamQuestionCommentArgs = {
  input: CreateMockExamQuestionCommentInput;
};


export type MutationCreateMockExamQuestionFeedbackArgs = {
  input: CreateMockExamQuestionFeedbackInput;
};


export type MutationCreateNoticeArgs = {
  input: CreateNoticeInput;
};


export type MutationCreateOrUpdateMockExamQuestionStateArgs = {
  input: CreateOrUpdateMockExamQuestionStateInput;
};


export type MutationDeleteMockExamArgs = {
  input: DeleteMockExamInput;
};


export type MutationDeleteMockExamCategoryArgs = {
  input: DeleteMockExamCategoryInput;
};


export type MutationDeleteMockExamQuestionArgs = {
  input: DeleteMockExamQuestionInput;
};


export type MutationDeleteMockExamQuestionCommentArgs = {
  input: DeleteMockExamQuestionCommentInput;
};


export type MutationDeleteMockExamQuestionFeedbackArgs = {
  input: DeleteMockExamQuestionFeedbackInput;
};


export type MutationDeleteNoticeArgs = {
  input: DeleteNoticeInput;
};


export type MutationEditMockExamArgs = {
  input: EditMockExamInput;
};


export type MutationEditMockExamCategoryArgs = {
  input: EditMockExamCategoryInput;
};


export type MutationEditMockExamQuestionArgs = {
  input: EditMockExamQuestionInput;
};


export type MutationEditMockExamQuestionBookmarkArgs = {
  input: EditMockExamQuestionBookmarkInput;
};


export type MutationEditMockExamQuestionCommentArgs = {
  input: EditMockExamQuestionCommentInput;
};


export type MutationEditMockExamQuestionCommentLikeArgs = {
  input: EditMockExamQuestionCommentLikeInput;
};


export type MutationEditMockExamQuestionFeedbackArgs = {
  input: EditMockExamQuestionFeedbackInput;
};


export type MutationEditNoticeArgs = {
  input: EditNoticeInput;
};


export type MutationEditProfileArgs = {
  input: EditProfileInput;
};


export type MutationEmailVerificationArgs = {
  input: EmailVerificationInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationResetMyExamQuestionStateArgs = {
  input: ResetMyExamQuestionStateInput;
};


export type MutationRestoreUserArgs = {
  input: RestoreUserInput;
};


export type MutationRevalidateArgs = {
  input: RevalidateInput;
};


export type MutationSendFindPasswordMailArgs = {
  input: SendFindPasswordMailInput;
};


export type MutationSendVerificationMailArgs = {
  input: SendVerificationMailInput;
};


export type MutationUpdateApprovedStateOfMockExamQuestionArgs = {
  input: UpdateApprovedStateOfMockExamQuestionInput;
};

export type NaverViewTapCrawlerInput = {
  blogName: Scalars['String'];
  keyword: Scalars['String'];
};

export type NaverViewTapCrawlerOutput = {
  __typename?: 'NaverViewTapCrawlerOutput';
  error?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  searchCount?: Maybe<SearchCount>;
};

export type Notice = {
  __typename?: 'Notice';
  confirm: Scalars['Boolean'];
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['Float'];
  reservationTime?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  findMyExamHistory: FindMyExamHistoryOutput;
  me: MeOutput;
  naverViewTapCrawlerTest: NaverViewTapCrawlerOutput;
  readAllMockExam: ReadAllMockExamsOutput;
  readAllMockExamCategories: ReadAllMockExamCategoriesOutput;
  readAllMockExamQuestion: ReadAllMockExamQuestionOutput;
  readAllMockExamQuestionFeedback: ReadAllMockExamQuestionFeedbackOutput;
  readExamTitleAndIdOfBookmarkedQuestion: ReadExamTitleAndIdOfBookmarkedQuestionOutput;
  readMockExam: ReadMockExamOutput;
  readMockExamQuestion: ReadMockExamQuestionOutput;
  readMockExamQuestionBookmark: ReadMockExamQuestionBookmarkOutput;
  readMockExamQuestionCommentLikesByQuestinId: ReadMockExamQuestionCommentLikesByQuestinIdOutput;
  readMockExamQuestionCommentsByQuestionId: ReadMockExamQuestionCommentsByQuestionIdOutput;
  readMockExamQuestionNumbers: ReadMockExamQuestionNumbersOutput;
  readMockExamQuestionsByMockExamId: ReadMockExamQuestionsByMockExamIdOutput;
  readMockExamQuestionsByState: ReadMockExamQuestionsByStateOutput;
  readMockExamTitlesByCateory: ReadMockExamTitlesByCateoryOutput;
  readMyExamQuestionState: ReadMyExamQuestionStateOutput;
  searchMockExam: SearchMockExamOutput;
  userProfile: UserProfileOutput;
};


export type QueryFindMyExamHistoryArgs = {
  input: FindMyExamHistoryInput;
};


export type QueryNaverViewTapCrawlerTestArgs = {
  input: NaverViewTapCrawlerInput;
};


export type QueryReadAllMockExamArgs = {
  input: ReadAllMockExamsInput;
};


export type QueryReadMockExamArgs = {
  input: ReadMockExamInput;
};


export type QueryReadMockExamQuestionArgs = {
  input: ReadMockExamQuestionInput;
};


export type QueryReadMockExamQuestionBookmarkArgs = {
  input: ReadMockExamQuestionBookmarkInput;
};


export type QueryReadMockExamQuestionCommentLikesByQuestinIdArgs = {
  input: ReadMockExamQuestionCommentLikesByQuestinIdInput;
};


export type QueryReadMockExamQuestionCommentsByQuestionIdArgs = {
  input: ReadMockExamQuestionCommentsByQuestionIdInput;
};


export type QueryReadMockExamQuestionNumbersArgs = {
  input: ReadMockExamQuestionNumbersInput;
};


export type QueryReadMockExamQuestionsByMockExamIdArgs = {
  input: ReadMockExamQuestionsByMockExamIdInput;
};


export type QueryReadMockExamQuestionsByStateArgs = {
  input: ReadMockExamQuestionsByStateInput;
};


export type QueryReadMockExamTitlesByCateoryArgs = {
  input: ReadMockExamTitlesByCateoryInput;
};


export type QueryReadMyExamQuestionStateArgs = {
  input: ReadMyExamQuestionStateInput;
};


export type QuerySearchMockExamArgs = {
  input: SearchMockExamInput;
};


export type QueryUserProfileArgs = {
  input: UserProfileInput;
};

export enum QuestionState {
  Core = 'CORE',
  High = 'HIGH',
  Middle = 'MIDDLE',
  Row = 'ROW'
}

export type ReadAllMockExamCategoriesOutput = {
  __typename?: 'ReadAllMockExamCategoriesOutput';
  categories: Array<MockExamCategory>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ReadAllMockExamQuestionFeedbackOutput = {
  __typename?: 'ReadAllMockExamQuestionFeedbackOutput';
  error?: Maybe<Scalars['String']>;
  feedbacks: Array<MockExamQuestionFeedback>;
  ok: Scalars['Boolean'];
};

export type ReadAllMockExamQuestionOutput = {
  __typename?: 'ReadAllMockExamQuestionOutput';
  error?: Maybe<Scalars['String']>;
  mockExamQuestions: Array<MockExamQuestion>;
  ok: Scalars['Boolean'];
};

export type ReadAllMockExamsInput = {
  all?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ReadAllMockExamsOutput = {
  __typename?: 'ReadAllMockExamsOutput';
  error?: Maybe<Scalars['String']>;
  mockExams: Array<MockExam>;
  ok: Scalars['Boolean'];
};

export type ReadExamTitleAndIdOfBookmarkedQuestionOutput = {
  __typename?: 'ReadExamTitleAndIdOfBookmarkedQuestionOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  titleAndId?: Maybe<Array<TitleAndId>>;
};

export type ReadMockExamInput = {
  id: Scalars['Float'];
};

export type ReadMockExamOutput = {
  __typename?: 'ReadMockExamOutput';
  error?: Maybe<Scalars['String']>;
  mockExam: MockExam;
  ok: Scalars['Boolean'];
  questionNumbers: Array<Scalars['Float']>;
};

export type ReadMockExamQuestionBookmarkInput = {
  examId: Scalars['Float'];
};

export type ReadMockExamQuestionBookmarkOutput = {
  __typename?: 'ReadMockExamQuestionBookmarkOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  questions: Array<MockExamQuestion>;
};

export type ReadMockExamQuestionCommentLikesByQuestinIdInput = {
  commentId: Scalars['Float'];
};

export type ReadMockExamQuestionCommentLikesByQuestinIdOutput = {
  __typename?: 'ReadMockExamQuestionCommentLikesByQuestinIdOutput';
  count: Scalars['Float'];
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ReadMockExamQuestionCommentsByQuestionIdInput = {
  questionId: Scalars['Float'];
};

export type ReadMockExamQuestionCommentsByQuestionIdOutput = {
  __typename?: 'ReadMockExamQuestionCommentsByQuestionIdOutput';
  comments?: Maybe<Array<MockExamQuestionComment>>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ReadMockExamQuestionInput = {
  examId: Scalars['Float'];
  questionId: Scalars['Float'];
};

export type ReadMockExamQuestionNumbersInput = {
  mockExamId: Scalars['Float'];
};

export type ReadMockExamQuestionNumbersOutput = {
  __typename?: 'ReadMockExamQuestionNumbersOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  questionNumbers: Array<Scalars['Float']>;
};

export type ReadMockExamQuestionOutput = {
  __typename?: 'ReadMockExamQuestionOutput';
  error?: Maybe<Scalars['String']>;
  mockExamQusetion: MockExamQuestion;
  ok: Scalars['Boolean'];
  state?: Maybe<QuestionState>;
};

export type ReadMockExamQuestionsByMockExamIdInput = {
  bookmarked?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['Float'];
  isRandom?: InputMaybe<Scalars['Boolean']>;
};

export type ReadMockExamQuestionsByMockExamIdOutput = {
  __typename?: 'ReadMockExamQuestionsByMockExamIdOutput';
  count: Scalars['Float'];
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  questions: Array<MockExamQuestion>;
  title: Scalars['String'];
};

export type ReadMockExamQuestionsByStateInput = {
  examId: Scalars['Float'];
  states: Array<QuestionState>;
};

export type ReadMockExamQuestionsByStateOutput = {
  __typename?: 'ReadMockExamQuestionsByStateOutput';
  error?: Maybe<Scalars['String']>;
  mockExamQusetions: Array<MockExamQuestion>;
  ok: Scalars['Boolean'];
};

export type ReadMockExamTitlesByCateoryInput = {
  name: Scalars['String'];
};

export type ReadMockExamTitlesByCateoryOutput = {
  __typename?: 'ReadMockExamTitlesByCateoryOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  titles: Array<ExamTitleAndId>;
};

export type ReadMyExamQuestionStateInput = {
  questionId: Scalars['Float'];
};

export type ReadMyExamQuestionStateOutput = {
  __typename?: 'ReadMyExamQuestionStateOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  state: MockExamQuestionState;
};

export type RegisterInput = {
  code: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterOutput = {
  __typename?: 'RegisterOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ResetMyExamQuestionStateInput = {
  examId: Scalars['Float'];
};

export type ResetMyExamQuestionStateOutput = {
  __typename?: 'ResetMyExamQuestionStateOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type RestoreUserInput = {
  id: Scalars['Float'];
};

export type RevalidateInput = {
  path: Scalars['String'];
};

export type RevalidateOutput = {
  __typename?: 'RevalidateOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SearchCount = {
  __typename?: 'SearchCount';
  all: Scalars['Float'];
  blog: Scalars['Float'];
};

export type SearchMockExamInput = {
  query: Scalars['String'];
};

export type SearchMockExamOutput = {
  __typename?: 'SearchMockExamOutput';
  error?: Maybe<Scalars['String']>;
  mockExams: Array<MockExam>;
  ok: Scalars['Boolean'];
  totalResults: Scalars['Float'];
};

export type SendFindPasswordMailInput = {
  email: Scalars['String'];
};

export type SendFindPasswordMailOutput = {
  __typename?: 'SendFindPasswordMailOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SendVerificationMailInput = {
  email: Scalars['String'];
};

export type SendVerificationMailOutput = {
  __typename?: 'SendVerificationMailOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type TitleAndId = {
  __typename?: 'TitleAndId';
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateApprovedStateOfMockExamQuestionInput = {
  questionId: Scalars['Float'];
};

export type UpdateApprovedStateOfMockExamQuestionOutput = {
  __typename?: 'UpdateApprovedStateOfMockExamQuestionOutput';
  currentApprovedState: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  questionId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  email: Scalars['String'];
  feedback: Array<Feedback>;
  id: Scalars['Float'];
  mockExamQuestionBookmark: Array<MockExamQuestionBookmark>;
  mockExamQuestionComment: Array<MockExamQuestionComment>;
  mockExamQuestionCommentLike: Array<MockExamQuestionCommentLike>;
  mockExamQuestionState: Array<MockExamQuestionState>;
  nickname: Scalars['String'];
  notice?: Maybe<Array<Notice>>;
  password: Scalars['String'];
  questionFeedback: Array<MockExamQuestionFeedback>;
  role: UserRole;
  updated_at: Scalars['DateTime'];
};

export type UserProfileInput = {
  id: Scalars['Float'];
};

export type UserProfileOutput = {
  __typename?: 'UserProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Client = 'CLIENT'
}

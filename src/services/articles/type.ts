export interface IArticle {
  userId?: 0;
  title: string;
  annotation: string;
  publishedDate: string;
  puplicationFieldId: number;
  createdAt?: string;
  articleKeywords: IArticleKeyword[];
  articleAuthors: IArticleAuthors[];
  articleFile: IArticleFile;
}

export interface IArticleKeyword {
  id?: number;
  articleId?: number;
  keyword: string;
  createdDate?: string;
}

export interface IArticleAuthors {
  id?: number;
  articleId?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  workplace: string;
  createdDate?: string;
}

export interface IArticleFile {
  id?: number;
  articleId?: number;
  fileName: string;
  fileExtension: string;
  fileSize: string;
  fileId: string;
  createdDate?: string;
}

export interface IArticleField {
  value: 1;
  text: string;
  orderCode: null;
}

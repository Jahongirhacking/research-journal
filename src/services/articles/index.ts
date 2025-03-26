import { api } from '../api';
import { mediaUrl } from '../api/const';
import { IArticle, IArticleField, IArticleFile } from './type';

const authApi = api.injectEndpoints({
  endpoints: build => ({
    createArticle: build.mutation<void, IArticle>({
      query: body => ({
        url: '/Article/Create',
        method: 'POST',
        body,
      }),
    }),
    uploadFile: build.mutation<IArticleFile, FormData>({
      query: body => ({
        url: `${mediaUrl}/Media/Upload`,
        method: 'POST',
        body,
      }),
    }),
    getFieldList: build.query<IArticleField[], void>({
      query: () => '/manual/PublicationFieldSelectList',
    }),
  }),
});

export const {
  useCreateArticleMutation,
  useUploadFileMutation,
  useGetFieldListQuery,
} = authApi;

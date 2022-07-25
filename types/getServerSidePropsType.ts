import { IncomingMessage, ServerResponse } from 'http';
import { ParsedUrlQuery } from 'querystring';

export type GetServerSidePropsContext = (context: {
    req: IncomingMessage
    res: ServerResponse
    params?: ParsedUrlQuery
    query: ParsedUrlQuery
    preview?: boolean
    previewData?: any
  }) => Promise<{ [key: string]: any }>
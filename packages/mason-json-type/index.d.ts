// This type definition adheres to Mason v2
import { HTTPMethods, HTTPStatusCodes } from 'http-typing'

export type MIME = string

export interface MasonControl {
  href: string,
  isHrefTemplate?: boolean,
  title?: string,
  description?: string,
  method?: HTTPMethods,
  encoding?: 'none' | 'json' | 'json+files' | 'raw',
  schemaUrl?: string,
  accept?: Array<MIME>,
  output?: Array<MIME>
  // Incomplete
}

export interface MasonControls {
  [key: string]: MasonControl
}

export interface MasonMeta {
  '@title'?: string,
  '@description'?: string,
  '@controls'?: MasonControls
}

export interface MasonNamespace {
  name: string
}

export interface MasonNamespaces {
  [key: string]: MasonNamespace
}

export interface MasonError {
  '@message': string,
  '@id'?: string,
  '@code'?: string,
  '@messages'?: Array<string>,
  '@details'?: string,
  '@HTTPStatusCodes'?: HTTPStatusCodes,
  '@controls'?: MasonControls,
  '@time'?: string
}

export default interface Mason {
  '@controls': MasonControls
}

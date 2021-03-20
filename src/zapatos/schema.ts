/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos (v2.0.1), and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 George MacKerron
Released under the MIT licence: see LICENCE file
*/

import * as db from './src/core';

type BasicWhereableFromInsertable<T> = { [K in keyof T]: Exclude<T[K] | db.ParentColumn, null | db.DefaultType> };
type WhereableFromBasicWhereable<T> = { [K in keyof T]?: T[K] | db.SQLFragment<any, T[K]> };
type WhereableFromInsertable<T> = WhereableFromBasicWhereable<BasicWhereableFromInsertable<T>>;

type UpdatableFromInsertable<T> = { [K in keyof T]?: T[K] | db.SQLFragment<any, T[K]> };

type JSONSelectableFromSelectable<T> = { [K in keyof T]:
  Date extends T[K] ? Exclude<T[K], Date> | db.DateString :
  Date[] extends T[K] ? Exclude<T[K], Date[]> | db.DateString[] :
  T[K]
};

/* === schema: public === */

/* --- enums --- */


/* --- tables --- */


/* === cross-table types === */

// `never` rather than `any` types would be more accurate in this no-tables case, but they stop `shortcuts.ts` compiling

export type Table = any;
export type Selectable = any;
export type Whereable = any;
export type Insertable = any;
export type Updatable = any;
export type UniqueIndex = any;
export type Column = any;
export type AllTables = [];


export type SelectableForTable<T extends Table> = any;

export type WhereableForTable<T extends Table> = any;

export type InsertableForTable<T extends Table> = any;

export type UpdatableForTable<T extends Table> = any;

export type UniqueIndexForTable<T extends Table> = any;

export type ColumnForTable<T extends Table> = any;

export type SQLForTable<T extends Table> = any;

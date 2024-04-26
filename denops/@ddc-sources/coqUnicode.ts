import {
  BaseSource,
  DdcOptions,
  Item,
  SourceOptions,
} from "https://deno.land/x/ddc_vim@v4.3.1/types.ts";
import {
  Denops,
} from "https://deno.land/x/ddc_vim@v4.3.1/deps.ts";

type Params = Record<never, never>;

export type Meta = 
  {name: string, unicode_symbol: string}

export class Source extends BaseSource<Params> {
  override async gather(args: {
    denops: Denops;
    options: DdcOptions;
    sourceOptions: SourceOptions;
    sourceParams: Params;
    completeStr: string;
  }): Promise<Item[]> {
    const base:Meta[] = [
      {name: "forall",unicode_symbol: "∀"},
      {name: "exists",unicode_symbol: "∃"},
      {name: "\\/",unicode_symbol: "∨"},
      {name:"/\\",unicode_symbol: "∧"},
      {name: "->",unicode_symbol: "→"},
      {name: "<->",unicode_symbol: "↔"},
      {name:"~",unicode_symbol: "¬"},
      {name:"<>",unicode_symbol: "≠"}
    ];
    const result =  base.flatMap((item) =>   {
      return ({
        word: item.unicode_symbol,
        kind: "coq-unicode",
        user_data: {
          name: item.name,
          unicode_symbol: item.unicode_symbol,
        }})
    });
    return result;
  }

  override params(): Params {
    return {};
  }
}

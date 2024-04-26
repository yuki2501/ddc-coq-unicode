import { Meta } from "../@ddc-sources/coqUnicode.ts";
import { BaseFilter, Item } from "https://deno.land/x/ddc_vim@v4.3.1/types.ts";
import {
  FilterArguments,
} from "https://deno.land/x/ddc_vim@v4.3.1/base/filter.ts";

export class Filter extends BaseFilter<Record<string, never>> {
  filter(
    args: FilterArguments<Record<string, never>>,
  ): Promise<Item[]> {
    return Promise.resolve(args.items.filter(
      (item) => {
        const meta = item.user_data as unknown as Meta;
        return meta && meta.name.startsWith(`${args.completeStr}`);
      },
    ));
  }
  params() {
    return {};
  }
}

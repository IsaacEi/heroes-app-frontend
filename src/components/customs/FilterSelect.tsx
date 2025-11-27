import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FC } from "react";

interface Option {
  value: string;
  label: string;
}

interface FilterSelectProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  includeNone?: boolean;
}

export const FilterSelect: FC<FilterSelectProps> = ({
  label,
  placeholder = "Select an option",
  value,
  onChange,
  options,
  includeNone = true,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>

            {includeNone && (
              <SelectItem value="none">None</SelectItem>
            )}

            {options.map(({value, label}) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
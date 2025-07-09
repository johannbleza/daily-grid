import {
  Activity,
  Apple,
  Book,
  Brain,
  Brush,
  Camera,
  CheckSquare,
  ChefHat,
  Clock,
  Code,
  Coffee,
  Dumbbell,
  Footprints,
  Gamepad2,
  GraduationCap,
  Guitar,
  Hammer,
  Heart,
  Home,
  Lightbulb,
  MessageCircle,
  Mic,
  Monitor,
  Mountain,
  Music,
  Palette,
  PenTool,
  Pill,
  Plane,
  Puzzle,
  Search,
  Smartphone,
  Stethoscope,
  Sun,
  Target,
  TreesIcon as Tree,
  Users,
  Utensils,
  Bike,
  Car,
  Headphones,
  Leaf,
  Moon,
  Scissors,
  ShoppingCart,
  Smile,
  Star,
  Zap,
  Waves,
  Wind,
  Wrench,
  SpaceIcon as Yoga,
  Fish,
  Flower,
  Globe,
  Compass,
  Video,
  Radio,
  Tv,
  Dice1,
  Trophy,
  Medal,
  Flag,
  Rocket,
  Sparkles,
  type LucideIcon,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import React from "react";

// Type-safe icon definition
interface IconDefinition {
  name: string;
  icon: LucideIcon;
}

// Type-safe category definition
type IconCategory =
  | "Fitness & Health"
  | "Learning & Growth"
  | "Creative & Arts"
  | "Productivity"
  | "Social & Communication"
  | "Lifestyle & Cooking"
  | "Entertainment & Games"
  | "Nature & Outdoors"
  | "Crafts & DIY";

// Type-safe icon categories with proper typing
const iconCategories: Record<IconCategory, IconDefinition[]> = {
  "Fitness & Health": [
    { name: "Activity", icon: Activity },
    { name: "Dumbbell", icon: Dumbbell },
    { name: "Heart", icon: Heart },
    { name: "Bike", icon: Bike },
    { name: "Apple", icon: Apple },
    { name: "Pill", icon: Pill },
    { name: "Stethoscope", icon: Stethoscope },
    { name: "Footprints", icon: Footprints },
    { name: "Yoga", icon: Yoga },
    { name: "Waves", icon: Waves },
  ],
  "Learning & Growth": [
    { name: "Book", icon: Book },
    { name: "Brain", icon: Brain },
    { name: "GraduationCap", icon: GraduationCap },
    { name: "Lightbulb", icon: Lightbulb },
    { name: "Target", icon: Target },
    { name: "Code", icon: Code },
    { name: "Monitor", icon: Monitor },
    { name: "Puzzle", icon: Puzzle },
  ],
  "Creative & Arts": [
    { name: "Palette", icon: Palette },
    { name: "Camera", icon: Camera },
    { name: "Music", icon: Music },
    { name: "Guitar", icon: Guitar },
    { name: "PenTool", icon: PenTool },
    { name: "Scissors", icon: Scissors },
    { name: "Brush", icon: Brush },
    { name: "Mic", icon: Mic },
    { name: "Video", icon: Video },
    { name: "Radio", icon: Radio },
  ],
  Productivity: [
    { name: "CheckSquare", icon: CheckSquare },
    { name: "Clock", icon: Clock },
    { name: "Star", icon: Star },
    { name: "Zap", icon: Zap },
    { name: "Target", icon: Target },
    { name: "Flag", icon: Flag },
    { name: "Rocket", icon: Rocket },
  ],
  "Social & Communication": [
    { name: "Users", icon: Users },
    { name: "MessageCircle", icon: MessageCircle },
    { name: "Smile", icon: Smile },
    { name: "Globe", icon: Globe },
  ],
  "Lifestyle & Cooking": [
    { name: "Coffee", icon: Coffee },
    { name: "Utensils", icon: Utensils },
    { name: "Home", icon: Home },
    { name: "ShoppingCart", icon: ShoppingCart },
    { name: "Car", icon: Car },
    { name: "ChefHat", icon: ChefHat },
  ],
  "Entertainment & Games": [
    { name: "Gamepad2", icon: Gamepad2 },
    { name: "Headphones", icon: Headphones },
    { name: "Smartphone", icon: Smartphone },
    { name: "Tv", icon: Tv },
    { name: "Dice1", icon: Dice1 },
    { name: "Trophy", icon: Trophy },
    { name: "Medal", icon: Medal },
  ],
  "Nature & Outdoors": [
    { name: "Sun", icon: Sun },
    { name: "Moon", icon: Moon },
    { name: "Tree", icon: Tree },
    { name: "Mountain", icon: Mountain },
    { name: "Leaf", icon: Leaf },
    { name: "Plane", icon: Plane },
    { name: "Fish", icon: Fish },
    { name: "Flower", icon: Flower },
    { name: "Compass", icon: Compass },
    { name: "Wind", icon: Wind },
  ],
  "Crafts & DIY": [
    { name: "Hammer", icon: Hammer },
    { name: "Wrench", icon: Wrench },
    { name: "Sparkles", icon: Sparkles },
  ],
} as const;

// Extract all possible icon names for type safety
type IconName = (typeof iconCategories)[IconCategory][number]["name"];

// Type-safe props interface
interface IconPickerProps {
  selectedIcon?: IconName;
  onIconSelect: (iconName: IconName, IconComponent: LucideIcon) => void;
}

// Type-safe filtered categories type
type FilteredCategories = Partial<Record<IconCategory, IconDefinition[]>>;

export default function IconPicker({
  selectedIcon,
  onIconSelect,
}: IconPickerProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  // Get all icons for searching with proper typing
  const allIcons: IconDefinition[] = React.useMemo(
    () => Object.values(iconCategories).flat(),
    [],
  );

  // Filter icons based on search query with proper typing
  const filteredCategories: FilteredCategories = React.useMemo(() => {
    if (!searchQuery) return iconCategories;

    const filtered: FilteredCategories = {};

    Object.entries(iconCategories).forEach(([category, icons]) => {
      const matchingIcons = icons.filter((icon) =>
        icon.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      if (matchingIcons.length > 0) {
        filtered[category as IconCategory] = matchingIcons;
      }
    });

    return filtered;
  }, [searchQuery]);

  const handleIconSelect = React.useCallback(
    (iconName: string) => {
      const iconData = allIcons.find((icon) => icon.name === iconName);
      if (iconData) {
        onIconSelect(iconData.name as IconName, iconData.icon);
      }
      setOpen(false);
    },
    [allIcons, onIconSelect],
  );

  // Get the selected icon component with proper typing
  const selectedIconData: IconDefinition | undefined = React.useMemo(
    () =>
      selectedIcon
        ? allIcons.find((icon) => icon.name === selectedIcon)
        : undefined,
    [selectedIcon, allIcons],
  );

  const SelectedIconComponent: LucideIcon | undefined = selectedIconData?.icon;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "size-20 rounded-full border-2 border-dashed",
            selectedIcon
              ? "border-solid border-primary"
              : "border-muted-foreground/50",
          )}
        >
          {SelectedIconComponent ? (
            <SelectedIconComponent className="size-10 text-zinc-300" />
          ) : (
            <Plus className="size-6 text-muted-foreground" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[500px] h-[90vh] max-h-[600px] flex flex-col p-0">
        <DialogHeader className="flex-shrink-0 p-4 pb-2 sm:p-6 sm:pb-4">
          <DialogTitle>Choose an Icon</DialogTitle>
          <DialogDescription>
            Select an icon to represent your habit from the categories below.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-shrink-0 px-4 sm:px-6 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search icons..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 sm:px-6 min-h-0">
          <div className="pb-4">
            {Object.entries(filteredCategories).map(
              ([category, icons], categoryIndex) => (
                <div key={category} className="mb-6">
                  <h4 className="mb-3 text-sm font-medium text-muted-foreground sticky top-0 bg-background py-2">
                    {category}
                  </h4>
                  <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1 sm:gap-2">
                    {icons?.map((icon) => {
                      const IconComponent: LucideIcon = icon.icon;
                      const isSelected: boolean = selectedIcon === icon.name;
                      return (
                        <Button
                          key={icon.name}
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "h-10 w-10 sm:h-12 sm:w-12 p-0 hover:bg-accent/50",
                            isSelected && "bg-accent border-2 border-primary",
                          )}
                          onClick={() => handleIconSelect(icon.name)}
                          title={icon.name}
                        >
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                      );
                    })}
                  </div>
                  {categoryIndex <
                    Object.entries(filteredCategories).length - 1 && (
                    <Separator className="mt-4 sm:mt-6" />
                  )}
                </div>
              ),
            )}
            {Object.keys(filteredCategories).length === 0 && (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No icons found matching &quot;{searchQuery}&quot;
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Export types for external use
export type { IconName, IconCategory, IconDefinition, IconPickerProps };

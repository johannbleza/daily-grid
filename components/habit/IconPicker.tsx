import * as React from "react";
import {
  Activity,
  Apple,
  Book,
  Brain,
  Camera,
  CheckSquare,
  Clock,
  Coffee,
  Dumbbell,
  Gamepad2,
  GraduationCap,
  Guitar,
  Heart,
  Home,
  Lightbulb,
  MessageCircle,
  Mountain,
  Music,
  Palette,
  PenTool,
  Pill,
  Plane,
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
  LucideIcon, // Import LucideIcon type
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Define a type for a single icon
type IconItem = {
  name: string;
  icon: LucideIcon; // Use LucideIcon for the icon component
};

// Define a type for the iconCategories object
type IconCategories = {
  [category: string]: IconItem[];
};

const iconCategories: IconCategories = {
  "Fitness & Health": [
    { name: "Activity", icon: Activity },
    { name: "Dumbbell", icon: Dumbbell },
    { name: "Heart", icon: Heart },
    { name: "Bike", icon: Bike },
    { name: "Apple", icon: Apple },
    { name: "Pill", icon: Pill },
    { name: "Stethoscope", icon: Stethoscope },
  ],
  "Learning & Growth": [
    { name: "Book", icon: Book },
    { name: "Brain", icon: Brain },
    { name: "GraduationCap", icon: GraduationCap },
    { name: "Lightbulb", icon: Lightbulb },
    { name: "Target", icon: Target },
  ],
  "Creative & Arts": [
    { name: "Palette", icon: Palette },
    { name: "Camera", icon: Camera },
    { name: "Music", icon: Music },
    { name: "Guitar", icon: Guitar },
    { name: "PenTool", icon: PenTool },
    { name: "Scissors", icon: Scissors },
  ],
  Productivity: [
    { name: "CheckSquare", icon: CheckSquare },
    { name: "Clock", icon: Clock },
    { name: "Star", icon: Star },
    { name: "Zap", icon: Zap },
  ],
  "Social & Communication": [
    { name: "Users", icon: Users },
    { name: "MessageCircle", icon: MessageCircle },
    { name: "Smile", icon: Smile },
  ],
  Lifestyle: [
    { name: "Coffee", icon: Coffee },
    { name: "Utensils", icon: Utensils },
    { name: "Home", icon: Home },
    { name: "ShoppingCart", icon: ShoppingCart },
    { name: "Car", icon: Car },
  ],
  Entertainment: [
    { name: "Gamepad2", icon: Gamepad2 },
    { name: "Headphones", icon: Headphones },
    { name: "Smartphone", icon: Smartphone },
  ],
  "Nature & Outdoors": [
    { name: "Sun", icon: Sun },
    { name: "Moon", icon: Moon },
    { name: "Tree", icon: Tree },
    { name: "Mountain", icon: Mountain },
    { name: "Leaf", icon: Leaf },
    { name: "Plane", icon: Plane },
  ],
};

interface IconPickerProps {
  selectedIcon?: string;
  // Ensure that IconComponent is of type LucideIcon
  onIconSelect: (iconName: string, IconComponent: LucideIcon) => void;
}

export default function IconPicker({
  selectedIcon,
  onIconSelect,
}: IconPickerProps) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  // Get all icons for searching
  const allIcons = React.useMemo(() => {
    return Object.values(iconCategories).flat();
  }, []); // Memoize allIcons since it doesn't change

  // Filter icons based on search query
  const filteredCategories = React.useMemo(() => {
    if (!searchQuery) return iconCategories;

    const filtered: IconCategories = {}; // Use the defined IconCategories type
    Object.entries(iconCategories).forEach(([category, icons]) => {
      const matchingIcons = icons.filter((icon) =>
        icon.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      if (matchingIcons.length > 0) {
        filtered[category] = matchingIcons;
      }
    });
    return filtered;
  }, [searchQuery]);

  const handleIconSelect = (iconName: string) => {
    const iconData = allIcons.find((icon) => icon.name === iconName);
    if (iconData) {
      onIconSelect(iconName, iconData.icon);
    }
    setOpen(false);
  };

  // Get the selected icon component
  const SelectedIconComponent = selectedIcon
    ? allIcons.find((icon) => icon.name === selectedIcon)?.icon
    : null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "h-16 w-16 rounded-full border-2 border-dashed",
            selectedIcon
              ? "border-solid border-primary"
              : "border-muted-foreground/50",
          )}
        >
          {SelectedIconComponent ? (
            <SelectedIconComponent className="size-8 text-zinc-400" />
          ) : (
            <div className="text-xs text-muted-foreground">+</div>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[500px] h-[90vh] max-h-[600px] p-0">
        <DialogHeader className="p-4 pb-2 sm:p-6 sm:pb-4">
          <DialogTitle>Choose an Icon</DialogTitle>
        </DialogHeader>

        <div className="px-4 sm:px-6">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search icons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 sm:px-6">
          <div className="pb-4">
            {Object.entries(filteredCategories).map(
              ([category, icons], categoryIndex) => (
                <div key={category} className="mb-6">
                  <h4 className="mb-3 text-sm font-medium text-muted-foreground sticky top-0 bg-background py-2">
                    {category}
                  </h4>
                  <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1 sm:gap-2">
                    {icons.map((icon) => {
                      const IconComponent = icon.icon;
                      const isSelected = selectedIcon === icon.name;
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

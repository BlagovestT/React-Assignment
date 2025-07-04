import { CardLogic } from "./cardLogic";
import type { Card as CardType } from "../../types/cardType";
import type { CardVariant } from "../../types/cardType";
import type { AppData } from "../../types/appDataType";
import DefaultImg from "../../assets/events1.jpg";
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardDescription,
  CardActions,
  CardLink,
  ActionButton,
} from "./Card.styles";
import { SquarePen, Trash } from "lucide-react";

type CardProps = {
  card: CardType;
  section: keyof AppData;
  variant?: CardVariant;
};

export const Card: React.FC<CardProps> = ({ card, section, variant }) => {
  const { handleEdit, handleDelete } = CardLogic(card, section);

  return (
    <CardContainer variant={variant}>
      {card.imageUrl && (
        <CardImage
          variant={variant}
          src={card.imageUrl}
          alt={card.title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DefaultImg;
          }}
        />
      )}

      <CardContent variant={variant}>
        <CardTitle>{card.title}</CardTitle>

        {card.subtitle && <CardSubtitle>{card.subtitle}</CardSubtitle>}

        <CardDescription>{card.description}</CardDescription>

        <CardActions>
          <CardLink>{card.ctaButtonLabel}</CardLink>

          <div>
            <ActionButton onClick={handleEdit}>
              <SquarePen />
            </ActionButton>
            <ActionButton onClick={handleDelete}>
              <Trash />
            </ActionButton>
          </div>
        </CardActions>
      </CardContent>
    </CardContainer>
  );
};

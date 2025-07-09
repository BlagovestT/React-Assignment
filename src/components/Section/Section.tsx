import { AddButton } from "../Button/AddButton";
import {
  SectionContainer,
  SectionHeader,
  SectionHeaderContent,
  SectionSubtitle,
  SectionTitle,
  SectionGrid,
  ErrorMessage,
} from "./Section.styles";
import type { ReactNode } from "react";
import type { AppData } from "../../types/appDataType";
import type { GridVariant } from "./Section.styles";
import type { ContainerVariant } from "./Section.styles";

interface SectionProps {
  children: ReactNode;
  subTitle: string;
  title: string;
  gridVariant: GridVariant;
  sectionVariant: ContainerVariant;
  section: keyof AppData;
  btnLabel: string;
}

const Section = ({
  subTitle,
  title,
  gridVariant,
  btnLabel,
  children,
  section,
  sectionVariant,
}: SectionProps) => {
  return (
    <SectionContainer variant={sectionVariant}>
      <SectionHeader>
        <SectionHeaderContent>
          <div>
            <SectionSubtitle>{subTitle}</SectionSubtitle>
            <SectionTitle>{title}</SectionTitle>
          </div>
          <AddButton section={section} label={btnLabel} />
        </SectionHeaderContent>
      </SectionHeader>

      {section.length === 0 ? (
        <ErrorMessage>
          No cards available. Click "Add button" to create your first article.
        </ErrorMessage>
      ) : (
        <SectionGrid variant={gridVariant}>{children}</SectionGrid>
      )}
    </SectionContainer>
  );
};

export default Section;

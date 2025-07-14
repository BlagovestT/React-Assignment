import { CardFormLogic } from "./CardForm.logic";
import type { AppData } from "../../types/appDataType";
import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  FormActions,
  ActionButton,
  ErrorMessage,
} from "./CardForm.styles";

type CardFormProps = {
  section: keyof AppData;
};

export const CardForm: React.FC<CardFormProps> = ({ section }) => {
  const {
    formData,
    errors,
    modalState,
    handleInputChange,
    handleSubmit,
    handleCancel,
  } = CardFormLogic(section);

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            min={2}
            max={20}
            value={formData.title || ""}
            onChange={handleInputChange}
            placeholder="Enter card title (optional)"
          />
          {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="subtitle">Subtitle</Label>
          <Input
            type="text"
            id="subtitle"
            name="subtitle"
            min={2}
            max={30}
            value={formData.subtitle || ""}
            onChange={handleInputChange}
            placeholder="Enter card subtitle (optional)"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description || ""}
            onChange={handleInputChange}
            placeholder="Enter card description (optional)"
            rows={4}
          />
          {errors.description && (
            <ErrorMessage>{errors.description}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl || ""}
            onChange={handleInputChange}
            placeholder="Enter image URL (optional)"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="ctaButtonLabel">CTA Button Label</Label>
          <Input
            type="text"
            id="ctaButtonLabel"
            name="ctaButtonLabel"
            value={formData.ctaButtonLabel || ""}
            onChange={handleInputChange}
            placeholder="Enter button label (optional)"
          />
          {errors.ctaButtonLabel && (
            <ErrorMessage>{errors.ctaButtonLabel}</ErrorMessage>
          )}
        </FormGroup>

        <FormActions>
          <ActionButton
            type="button"
            variant="secondary"
            onClick={handleCancel}
          >
            Cancel
          </ActionButton>
          <ActionButton type="submit" variant="primary">
            {modalState.card ? "Update Card" : "Create Card"}
          </ActionButton>
        </FormActions>
      </form>
    </FormContainer>
  );
};

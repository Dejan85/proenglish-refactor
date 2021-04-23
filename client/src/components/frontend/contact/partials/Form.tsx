import React from "react";
import { useForm } from "react-hook-form";
import { ContentContainer, Label, Button, Text } from "~/src/components/ui";

type FormValues = {
  name: string;
  email: string;
  title: string;
  question: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
      <ContentContainer className="contact__input-holder">
        <Label htmlFor="name" className="contact__form-label">
          Ime
        </Label>
        <input
          className="contact__input"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <Text className="contact__form-error-validation" as="p">
            Ime je obavezno
          </Text>
        )}
      </ContentContainer>

      <ContentContainer className="contact__input-holder">
        <Label htmlFor="email" className="contact__form-label">
          Email
        </Label>
        <input
          className="contact__input"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <Text className="contact__form-error-validation" as="p">
            Email je obavezan
          </Text>
        )}
      </ContentContainer>

      <ContentContainer className="contact__input-holder">
        <Label htmlFor="title" className="contact__form-label">
          Title
        </Label>
        <input
          className="contact__input"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <Text className="contact__form-error-validation" as="p">
            Title je obavezan
          </Text>
        )}
      </ContentContainer>

      <ContentContainer className="contact__input-holder">
        <Label htmlFor="question" className="contact__form-label">
          Pitanje
        </Label>
        <textarea
          rows={7}
          className="contact__textarea"
          {...register("question", { required: true })}
        />
      </ContentContainer>

      <Button className="contact__submit-button" type="submit">
        Pošalji
      </Button>
    </form>
  );
};

export default Form;

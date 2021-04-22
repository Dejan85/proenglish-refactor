import React from "react";
import { useForm } from "react-hook-form";
import { ContentContainer, Input, Label, Button } from "~/src/components/ui";

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

  const onSubmit = (data) => console.log(data);

  return (
    <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
      <ContentContainer className="contact__input-holder">
        <Label className="contact__form-label">Ime</Label>
        <input className="contact__input" {...register("name")} />
      </ContentContainer>

      <ContentContainer className="contact__input-holder">
        <Label className="contact__form-label">Email</Label>
        <input className="contact__input" {...register("email")} />
      </ContentContainer>

      <ContentContainer className="contact__input-holder">
        <Label className="contact__form-label">Title</Label>
        <input className="contact__input" {...register("title")} />
      </ContentContainer>

      <ContentContainer className="contact__input-holder">
        <Label className="contact__form-label">Pitanje</Label>
        <textarea
          rows={7}
          className="contact__textarea"
          {...register("question")}
        />
      </ContentContainer>

      <Button className="contact__submit-button" type="submit">
        Pošalji
      </Button>
    </form>
  );
};

export default Form;

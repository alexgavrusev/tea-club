import React, { forwardRef } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import gPhoneNumber from "google-libphonenumber";

import "@reach/dialog/styles.css";

import Box from "components/box";
import { Subheading, Paragraph } from "components/typography";
import Button from "components/button";

import useDialog from "hooks/useDialog";

const phoneUtil = gPhoneNumber.PhoneNumberUtil.getInstance();

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Введите ваше имя"),
    tel: yup
      .string()
      .test("is-phone", "Введите действительный номер телефона", (value) => {
        try {
          const phoneNum = phoneUtil.parseAndKeepRawInput(value);

          if (!phoneUtil.isPossibleNumber(phoneNum)) {
            return false;
          }

          return true;
        } catch {
          return false;
        }
      })
      .required("Введите ваш телефон"),
  })
  .strict(true);

const Overlay = (props) => (
  <Box
    as={DialogOverlay}
    position="fixed"
    top={0}
    left={0}
    bottom={0}
    right={0}
    backgroundColor="rgba(0, 0, 0, 0.5)"
    display="flex"
    justifyContent="center"
    alignItems="center"
    {...props}
  />
);

const Content = (props) => (
  <Box
    as={DialogContent}
    width={1}
    my={0}
    mx={[16, 16, 32]}
    maxWidth="36rem"
    aria-labelledby="title"
    {...props}
  />
);

const Title = (props) => (
  <Subheading color="#000" id="title" mb={16} {...props} />
);

const Label = (props) => (
  <Paragraph as="label" color="#000" mr={8} {...props} />
);

const Input = forwardRef((props, ref) => (
  <Paragraph ref={ref} as="input" type="text" color="#000" {...props} />
));

const Error = ({ errors, name }) => {
  return (
    <Paragraph flex="0 0 100%" color="#AD0101" fontSize={1}>
      {/* TODO: maybe '\u00A0' instead of null */}
      {errors[name] ? errors[name].message : null}
    </Paragraph>
  );
};

const InputContainer = (props) => (
  <Box display="flex" alignItems="center" flexWrap="wrap" {...props} />
);

const Dialog = () => {
  const [{ formHeading, open, validSubmitted }, setDialogState] = useDialog();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const closeDialog = () =>
    setDialogState((prev) => ({ ...prev, open: false }));

  const onSubmit = (data) => {
    setDialogState((prev) => ({ ...prev, validSubmitted: true }));
  };

  if (validSubmitted) {
    return (
      <Overlay isOpen={open} onDismiss={closeDialog}>
        <Content>
          <Title>Заявка отправлена</Title>
          <Paragraph color="#000" mb={32}>
            В ближайшее время мы свяжемся с вами для уточнения деталей.
          </Paragraph>
          <Button onClick={closeDialog}>ОК</Button>
        </Content>
      </Overlay>
    );
  }

  return (
    <Overlay isOpen={open} onDismiss={closeDialog}>
      <Content>
        <Title>{formHeading}</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column">
            <InputContainer>
              <Label htmlFor="name">Ваше имя:</Label>
              <Input name="name" id="name" ref={register} />
              <Error errors={errors} name="name" />
            </InputContainer>

            <InputContainer mt={16} mb={32}>
              <Label htmlFor="tel">Телефон:</Label>
              <Input name="tel" id="tel" ref={register} />
              <Error errors={errors} name="tel" />
            </InputContainer>
          </Box>

          <Button type="submit">Отправить</Button>
        </form>
      </Content>
    </Overlay>
  );
};

export default Dialog;

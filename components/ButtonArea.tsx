import { Button, Card } from "@shopify/polaris";

export const ButtonArea: React.VFC = () => {
  return (
    <Card sectioned>
      <Button role="button" onClick={() => alert("Button clicked!")}>
        押してね
      </Button>
    </Card>
  );
};

import { Stack, Grid, Text } from "@chakra-ui/core";
import { Header } from "../components/Header";

export default function Join() {
  return (
    <>
      <Header />
      <Grid p={10}>
        <Text
          p={10}
          display="inline-flex"
          justifyContent="center"
          fontSize={{ base: "5xl", md: "6xl" }}
          fontWeight="bold"
          color="gray.600"
          lineHeight={{ base: "none", md: "none", lg: "normal" }}
        >
          Jak pomóc lokalom gastronomicznym?
        </Text>
        <Text fontSize="xl" py={5}>
          Podaczas pierwszej fali, organizowane było wiele akcji zbierających
          środki na walke z koronawirusem.
        </Text>
        <Text fontSize="xl" py={5}>
          Co wy na to żeby zorganizować jeszcze jedną dla branży gastronomicznej
          która pozwoliłaby przetrwać tym które są najbardziej zagrożone.No
          dobrze ale jak to zrobić?
        </Text>
        <Text fontSize="xl" py={5}>
          Otóż siedząc pewniego smutnego sobotniego popłudnia zamknięty w
          czterech ścianach pomyślałem: “A co jeśli każda chcąca pomóc osoba
          wpłaciła złotówkę?” Szybka kalkulacja na przykładzie śląska,
          uzyskalibyśmy ok{" "}
          <b>4,4 mln złotych (otrzymalibyśmy ok 0.06 sasina).</b>
        </Text>
        <Text fontSize="xl" py={5}>
          Pozwoliłoby to uzbierać całkiem okrągłą kwote. Patrząc na statystuki
          GUSU z zeszłego roku na Śląsku jest ok{" "}
          <b>1750 obiektów gastronomicznych.</b>
          Taka kwota pozwoliłaby na zasilenie budżetu każdej z knajpek o kwote
          ok <b>2500 złotych.</b> Jasne, raczej nie istenieje taka siła która
          zachęciłaby wszystkich do wpłaty chociażby grosza. Jednak postanowiłem
          spróbować.
        </Text>
        <Text fontSize="xl" py={5}>
          Stworzyłem w tym celu platformę do której mogą rejestrować się
          potrzebujące obiekty gastronomiczne, oraz zbiórkę pieniędzy na portalu
          <b>zrzutka.pl.</b>
        </Text>
        <Text fontSize="xl" py={5}>
          Obiekty podczas rejestracji określają jaka kwota pozwoliłaby im
          przetrwać ten okres. Następnie zebrane środki są rozdzielane po równo,
          do momentu uzbierania konkretnej kwoty dla każdego z obiektu a
          następnie zostaną przekazane.
        </Text>
        <Text fontSize="xl" py={5}>
          <b>Czy to zadziała?</b>
          <br />
          Nie wiem.
          <br />
          <b>Czy to ma sens?</b>
          <br />
          Nie wiem, okaze się.
          <br />
          <b>Wiem że mam dość narzekania i chce w końcu coś zrobić.</b>
        </Text>
        <Text fontSize="xl" py={5}>
          Jeśli masz pomysł na rozwój tej akcji, lub chciałbyś/chciałabyś pomóc
          serdecznie zapraszam. Każda para rąk się przyda, żeby każdy mógł
          jeszcze odwiedzić swoje ulubione miejsce , zjeść ulubionego burgera,
          czy napić się piwa ze znajomymi albo po prostu gdzieś wyjść.
        </Text>
        <Text fontSize="2xl" py={5}>
          <b>Miejmy nadzieje że jeszcze będzie normalnie :)</b>
        </Text>
      </Grid>
    </>
  );
}

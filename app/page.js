import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={"/Lautrec400x600.jpg"}
        width={600}
        height={600}
        className={styles.img}
        alt="imgLautrec"
      ></Image>
      <div className={styles.description}>
        <h3 className={styles.text}>POSTERS AND ILLUSTRATIONS</h3>
        <audio
          controls
          src="/POSTERSANDILLUSTRATIONS.mp3"
          className={styles.audio}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <p className={styles.p}>
          Starting from 1880, a marginal neighborhood of Paris, Montmartre,
          turned into the place where a new way of understanding art developed,
          thanks to the gathering of young creative radicals coming from the
          most diverse disciplines. Influencing each other, they developed the
          contemporary artistic expression and captured the modern life with a
          fresh look. Toulouse-Lautrec was part of this group of artists. His
          graphic works masterfully represented the bohemian world of Parisian
          nightlife. The typographic poster technique has a leading position in
          the work of Lautrec, who would deal with it in a very personal style,
          understanding the potential of a medium which represented a quick and
          easy form of communication. From the beginning, his distinctive
          features were the use of flat, pure colors, a synthetic composition,
          and the use of graphics as an artistic element within the printed
          framework, all this to create a combination of pictorial and
          typographic elements. While Lautrec was alive, his reputation as a
          painter was not fully recognize, but his contemporaries quickly
          understood the importance of his graphic and typographic work: Thadée
          Natanson, one of the founders of the magazine "Revue Blanch”, noticed
          Toulouse-Lautrec's posters “shining” through the streets of Paris. And
          the general public started to collect them. Lautrec's first poster was
          the popular and successful "Moulin Rouge - La Goulue" of 1891, which
          brought the artist several jobs, including the cabaret of Aristide
          Bruant, a poet, chansonnier and later a great friend of the painter.
          It was just in the graphic work of Toulouse-Lautrec that the nocturnal
          world of the cabaret found its greatest expression: it was a world
          made up of eccentric characters, bohemians, darkness and artificial
          lights. Thanks to the artist’s skill in artisan printing processes
          (especially in the lithographic), this peculiar world is faithfully
          represented and deliver to memory artists, comedians and prostitutes
          that would have otherwise been forgot. In graphic experimentation,
          Lautrec was also a great illustrator: he made works for the weekly
          magazine "Le Rire” as well as the magazines "La Revue blanche" (1895),
          and "L'Aube" (1896). Similarly, to Jules Chéret and Théophile Steilen,
          two great exponents of French poster art, Lautrec experimented with
          moving away from simple typographic composition to combine
          illustration and lettering. Thanks to chromolithography, a new
          printing technique emerged at that time, which let him easily print
          several copies, many of his oil and pastel works could be spread under
          the form of color illustrations, and are now on display in this
          exhibition. Lautrec illustrates not only magazines, but also
          decorative items, theater programs, albums, and novels, removing any
          distinction between the different artistic expressions, as well as
          between art and applied arts, thus generating a mutual influence
          between graphic art and painting.
        </p>
      </div>
    </main>
  );
}

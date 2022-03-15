<template>
  <div>
    <navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 style="text-align: left; margin-top: 20px; font-size: 53px">
            Terms of Service
          </h1>
        </div>
        <div
          class="col-md-12"
          style="text-align: justify; text-justify: inter-word"
        >
          <h2 style="margin-top: 20px">1. Terms</h2>

          <p>
            By accessing this Website, accessible from http://localhost:8080/,
            you are agreeing to be bound by these Website Terms and Conditions
            of Use and agree that you are responsible for the agreement with any
            applicable local laws. If you disagree with any of these terms, you
            are prohibited from accessing this site. The materials contained in
            this Website are protected by copyright and trade mark law.
          </p>

          <h2>2. Use License</h2>

          <p>
            Permission is granted to temporarily download one copy of the
            materials on Lupin's Website for personal, non-commercial transitory
            viewing only. This is the grant of a license, not a transfer of
            title, and under this license you may not:
          </p>

          <ul>
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose or for any public
              display;
            </li>
            <li>
              attempt to reverse engineer any software contained on Lupin's
              Website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transferring the materials to another person or "mirror" the
              materials on any other server.
            </li>
          </ul>

          <p>
            This will let Lupin to terminate upon violations of any of these
            restrictions. Upon termination, your viewing right will also be
            terminated and you should destroy any downloaded materials in your
            possession whether it is printed or electronic format.
          </p>

          <h2>3. Disclaimer</h2>

          <p>
            All the materials on Lupin’s Website are provided "as is". Lupin
            makes no warranties, may it be expressed or implied, therefore
            negates all other warranties. Furthermore, Lupin does not make any
            representations concerning the accuracy or reliability of the use of
            the materials on its Website or otherwise relating to such materials
            or any sites linked to this Website.
          </p>

          <h2>4. Limitations</h2>

          <p>
            Lupin or its suppliers will not be hold accountable for any damages
            that will arise with the use or inability to use the materials on
            Lupin’s Website, even if Lupin or an authorize representative of
            this Website has been notified, orally or written, of the
            possibility of such damage. Some jurisdiction does not allow
            limitations on implied warranties or limitations of liability for
            incidental damages, these limitations may not apply to you.
          </p>

          <h2>5. Revisions and Errata</h2>

          <p>
            The materials appearing on Lupin’s Website may include technical,
            typographical, or photographic errors. Lupin will not promise that
            any of the materials in this Website are accurate, complete, or
            current. Lupin may change the materials contained on its Website at
            any time without notice. Lupin does not make any commitment to
            update the materials.
          </p>

          <h2>6. Links</h2>

          <p>
            Lupin has not reviewed all of the sites linked to its Website and is
            not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement by Lupin of the
            site. The use of any linked website is at the user’s own risk.
          </p>

          <h2>7. Governing Law</h2>

          <p>
            Any claim related to Lupin's Website shall be governed by the laws
            of cw without regards to its conflict of law provisions.
          </p>
        </div>
      </div>
    </div>

    <footerapp />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import footerapp from "@/components/footerapp.vue";

export default {
  name: "Terms of service",
  components: {
    navbar,
    footerapp,
  },
};
</script>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
